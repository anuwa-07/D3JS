
// 
// module.onloaded = function() {
    // var index = 0;
    // var compact = 0;
    // var actNdCent = 0;
    var chart;
    d3.csv('https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv').then((dataFlattened) => {
        dataFlattened.forEach((d) => {
            const val = Math.round(d.name.length / 2);
            d.progress = [...new Array(val)].map((d) => Math.random() * 25 + 5);
        });
        //
        // Make the new chart
        chart = new d3.OrgChart()
        .container('.chart-container')
        .svgHeight(window.innerHeight - 10)
        .data(dataFlattened)
        .nodeHeight((d) => 170)
        .nodeWidth((d) => {
        if (d.depth == 0) return 500;
        return 330;
        })
        .childrenMargin((d) => 90)
        .compactMarginBetween((d) => 65)
        .compactMarginPair((d) => 100)
        .neightbourMargin((a, b) => 50)
        .siblingsMargin((d) => 100)
        .buttonContent(({ node, state }) => {
        return `<div style="color:#2CAAE5;border-radius:5px;padding:3px;font-size:10px;margin:auto auto;background-color:#040910;border: 1px solid #2CAAE5"> <span style="font-size:9px">${
            node.children
            ? `<i class="fas fa-angle-up"></i>`
            : `<i class="fas fa-angle-down"></i>`
        }</span> ${node.data._directSubordinates}  </div>`;
        })
        .linkUpdate(function (d, i, arr) {
        d3.select(this)
            .attr('stroke', (d) =>
            d.data._upToTheRootHighlighted ? '#14760D' : '#2CAAE5'
            )
            .attr('stroke-width', (d) =>
            d.data._upToTheRootHighlighted ? 15 : 1
            );

        if (d.data._upToTheRootHighlighted) {
            d3.select(this).raise();
        }
        })
        .nodeContent(function (d, i, arr, state) {
        const svgStr = `<svg width=150 height=75  style="background-color:none"> <path d="M 0,15 L15,0 L135,0 L150,15 L150,60 L135,75 L15,75 L0,60" fill="#2599DD" stroke="#2599DD"/> </svg>`;
        return `
                        <div style="font-family: 'Inter'; background-color:#040910;sans-serif; position:absolute;margin-top:-1px; margin-left:-1px;width:${
                        d.width
                        }px;height:${d.height}px;border-radius:0px;border: 2px solid #2CAAE5">
                        
                        <div class="pie-chart-wrapper" style="margin-left:-10px;margin-top:5px;width:320px;height:300px"></div>
                        
                        <div style="color:#2CAAE5;position:absolute;right:15px;top:-20px;">
                            <div style="font-size:15px;color:#2CAAE5;margin-top:32px"> ${
                            d.data.name
                            } </div>
                            <div style="font-size:10px;"> ${
                            d.data.positionName || ''
                            } </div>
                            <div style="font-size:10px;"> ${
                            d.data.id || ''
                            } </div>
                            ${
                            d.depth == 0
                                ? `                              <br/>
                            <div style="max-width:200px;font-size:10px;">
                            A corporate history of Ian is a chronological account of a business or other co-operative organization he founded.  <br><br>Usually it is produced in written format but it can also be done in audio or audiovisually  
                            </div>`
                                : ''
                            }

                        </div>

                        <div style="position:absolute;left:-5px;bottom:10px;">
                            <div style="font-size:10px;color:#2CAAE5;margin-left:20px;margin-top:32px"> Progress </div>
                            <div style="color:#2CAAE5;margin-left:20px;margin-top:3px;font-size:10px;"> 
                            <svg width=150 height=30> ${d.data.progress
                                .map((h, i) => {
                                return `<rect  width=10 x="${
                                    i * 12
                                }" height=${h}  y=${
                                    30 - h
                                } fill="#B41425"/>`;
                                })
                                .join('')}  </svg>
                            </div>
                        </div>
                        </div>
            `;
        })
        .nodeUpdate(function (d, i, arr) {
            d3.select(this)
            .select('.node-rect')
            .attr('stroke', (d) =>
                d.data._highlighted || d.data._upToTheRootHighlighted
                ? '#14760D'
                : 'none'
            )
            .attr(
                'stroke-width',
                d.data._highlighted || d.data._upToTheRootHighlighted ? 40 : 1
            );

            const pieChartWrapperNode = d3
            .select(this)
            .select('.pie-chart-wrapper')
            .node();
            const val = (d.data.name.length * 5) % 100; // Dummy calc
            // General pie chart invokation code
            new PieChart()
            .data([
                { key: 'plan', color: '#6EC2EA', value: val },
                { key: 'exec', color: '#0D5AAF', value: 100 - val },
            ])
            .container(pieChartWrapperNode)
            .svgHeight(200)
            .svgWidth(320)
            .marginTop(40)
            .image(d.data.imageUrl)
            .backCircleColor('#1F72A7')
            .defaultFont('Inter')
            .render();
        })
        // Render the chart
        .render();

        /*
        const url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QMaAyMA1SdmlAAAAVRJREFUeNrt26FOw2AUhuFTElzrETNLMNPtJVRVVFbtlnYXKGQFqldANo3EoLDUITazzCxBTNBk53lv4M+XJ/ndKZ52L9uft9eP+Oeqbtgs8O7+cbWO36/PiIgmwd4ojsdIU9n2l7XzNBYZNj9Eos6oTRbcdMAZAwxYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmABBizAAqwFgZ/fv+slHl7q3aobNpn2proujIgo276ep/HgixZgARZgARZgAQYswAIswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7D+AHZdeN97XRf6ogVYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABFmDAAizAAizAAqxrYNeF973XdaEvWoAFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswAIswAKsW0p1m1S2/WXtPI1Fhs0nxU1Jj2yxm2sAAAAASUVORK5CYII=`;
        const replaced = url.replace(/(\r\n|\n|\r)/gm);
        d3.select('.svg-chart-container')
        .style(
            'background',
            'radial-gradient(circle at center, #04192B 0, #000B0E 100%) url("https://raw.githubusercontent.com/bumbeishvili/coronavirus.davidb.dev/master/glow.png")'
        )
        .style(
            'background-image',
            `url(${replaced}), radial-gradient(circle at center, #04192B 0, #000B0E 100%)`
        );
        */
    });
    //
    // For downloading the chart as a pdf
    function downloadPdf() {
        chart.exportImg({
          save: false,
          onLoad: (base64) => {
            var pdf = new jspdf.jsPDF();
            var img = new Image();
            img.src = base64;
            img.onload = function () {
              pdf.addImage(
                img,
                'JPEG',
                5,
                5,
                595 / 3,
                ((img.height / img.width) * 595) / 3
              );
              pdf.save('chart.pdf');
            };
          },
        });
    }
// }