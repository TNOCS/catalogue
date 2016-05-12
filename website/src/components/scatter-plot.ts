import {autoinject} from 'aurelia-framework';
import {bindable, bindingMode} from 'aurelia-framework';
import * as d3 from 'd3';

import {IProject} from '../models/project';
import {ICharacteristic} from '../models/characteristic';

/** Format of the data in the scatterplot */
export interface IDataFormat {
    solvability: number; // x
    usability: number; // y
    maturity: number; // color of the bubble
    project: IProject; // reference to the project
}

@autoinject
export class ScatterPlotCustomElement {
    @bindable gap: ICharacteristic;

    private margin;
    private width: number;
    private height: number;
    private didError: boolean;
    private filename: string;
    private errorMessage: string;

    constructor() {
        this.didError = false;
        this.filename = 'data/static-line-chart.tsv';
    }

    attached() {
        this.initializeChart();
    }

    /** Will be automatically invoked when the bound project property is changed. */
    gapChanged(gap: ICharacteristic, oldValue: ICharacteristic) {
        // console.log('GAP changed: ' + gap.title);

        if (!gap.projects || gap.projects.length === 0) return;
        let data: IDataFormat[] = [];

        gap.projects.forEach(p => {
            let x: number = 0;
            p.gaps.some(g => {
                if (g.id !== gap.id) return false;
                x = g.score.rating.value;
                return true;
            });
            data.push({
                solvability: x,
                usability: (p.usabilityLevel && p.usabilityLevel.rating) ? p.usabilityLevel.rating.value : 0,
                maturity: (p.maturityLevel && p.maturityLevel.rating) ? p.maturityLevel.rating.value : 1,
                project: p
            });
        });

        this.render(data);
    }

    private render(data: IDataFormat[]) {
        d3.select("#the_SVG_ID").remove();
        /* 
        * value accessor - returns the value to encode for a given data object.
        * scale - maps value to a visual display encoding, such as a pixel position.
        * map function - maps from data value to display value
        * axis - sets up axis
        */

        // setup x 
        var xValue = function (d: IDataFormat) { return d.solvability; }, // data -> value
            xScale = d3.scale.linear().range([0, this.width]), // value -> display
            xMap = function (d: IDataFormat) { return xScale(xValue(d)); }, // data -> display
            xAxis = d3.svg.axis().scale(xScale).orient("bottom");

        // setup y
        var yValue = function (d: IDataFormat) { return d.usability; }, // data -> value
            yScale = d3.scale.linear().range([this.height, 0]), // value -> display
            yMap = function (d: IDataFormat) { return yScale(yValue(d)); }, // data -> display
            yAxis = d3.svg.axis().scale(yScale).orient("left");

        // setup fill color
        var cValue = function (d: IDataFormat) { return d.project.shortTitle; },
            color = d3.scale.category10();

        // add the graph canvas the webpage
        var svg = d3.select("#placeholder").append("svg")
            .attr("id", "the_SVG_ID")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

        // add the tooltip area to the webpage
        var tooltip = d3.select("#placeholder").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // don't want dots overlapping axis, so add in buffer to data domain
        xScale.domain([d3.min(data, xValue) - 1, d3.max(data, xValue) + 1]);
        yScale.domain([d3.min(data, yValue) - 1, d3.max(data, yValue) + 1]);

        // x-axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + this.height + ")")
            .call(xAxis)
            .append("text")
            .attr("class", "label")
            .attr("x", this.width)
            .attr("y", -6)
            .style("text-anchor", "end")
            .text("Solvability");

        // y-axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Usability");

        // draw dots
        svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", function (d: IDataFormat) { return 5 + 2 * d.maturity; })
            .attr("cx", xMap)
            .attr("cy", yMap)
            .style("fill", function (d: IDataFormat) { return color(cValue(d)); })
            .on("mouseover", function (d: IDataFormat) {
                tooltip.transition()
                    .duration(200)
                    .style("position", "fixed")
                    .style("left", `${(<any>d3.event).pageX + 16}px`)
                    .style("top", `${(<any>d3.event).pageY - 28}px`)
                    .style("opacity", .9);
                tooltip.html(`${d.project.shortTitle}<br/> (solvability: ${d.solvability}, usability: ${d.usability}, maturity: ${d.maturity})`);
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // draw legend
        var legend = svg.selectAll(".legend")
            .data(color.domain())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

        // draw legend colored rectangles
        legend.append("rect")
            .attr("x", this.width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        // draw legend text
        legend.append("text")
            .attr("x", this.width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) { return d; })
    }

    private initializeChart() {
        this.margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 50
        };
        this.width = 460 - this.margin.left - this.margin.right;
        this.height = 300 - this.margin.top - this.margin.bottom;
    }

    private renderLineChart2() {
        var lineChart = this;
        var filename = this.filename;

        var parseDate = d3.time.format("%d-%b-%y").parse;

        var x = d3.time.scale()
            .range([0, this.width]);

        var y = d3.scale.linear()
            .range([this.height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var line = d3.svg.line()
            .x(function (d: any) { return x(d.date); })
            .y(function (d: any) { return y(d.close); });

        var svg = d3.select("#placeholder").append("svg")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

        d3.tsv(filename, function (error: any, data) {
            if (error) {
                lineChart.didError = true;
                lineChart.errorMessage = error.responseText || 'There was an unspecified problem';
                return;
            };

            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.close = +d.close;
            });

            x.domain(d3.extent(data, function (d: any) { return d.date; }));
            y.domain(d3.extent(data, function (d: any) { return d.close; }));

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + lineChart.height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Price ($)");

            svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("d", line);
        });
    }
}