// Select the SVG container
const svg = d3.select("#diagram");

// Define nodes (components) and links (data flows) for a basic DFD example
const nodes = [
    { id: "User", type: "actor", x: 100, y: 300 },
    { id: "Frontend", type: "component", x: 300, y: 300 },
    { id: "Backend", type: "component", x: 500, y: 300 },
    { id: "Database", type: "datastore", x: 700, y: 300 },
];

const links = [
    { source: "User", target: "Frontend", threat: "Spoofing" },
    { source: "Frontend", target: "Backend", threat: "Tampering" },
    { source: "Backend", target: "Database", threat: "Repudiation" },
];

// Draw links (data flows) with lines
svg.selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("x1", d => nodes.find(n => n.id === d.source).x)
    .attr("y1", d => nodes.find(n => n.id === d.source).y)
    .attr("x2", d => nodes.find(n => n.id === d.target).x)
    .attr("y2", d => nodes.find(n => n.id === d.target).y)
    .on("mouseover", (event, d) => {
        d3.select(event.currentTarget).style("stroke", "red");
        d3.select("#threat-label").text(`Threat: ${d.threat}`).style("opacity", 1);
    })
    .on("mouseout", (event) => {
        d3.select(event.currentTarget).style("stroke", "#777");
        d3.select("#threat-label").style("opacity", 0);
    });

// Draw nodes (components) as circles
svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", 30)
    .on("click", (event, d) => {
        alert(`Component: ${d.id}`);
    });

// Label each node
svg.selectAll(".label")
    .data(nodes)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", d => d.x)
    .attr("y", d => d.y - 40)
    .attr("text-anchor", "middle")
    .text(d => d.id);

// Optional: Add a threat label that appears on hover
svg.append("text")
    .attr("id", "threat-label")
    .attr("x", 400)
    .attr("y", 50)
    .attr("text-anchor", "middle")
    .style("font-weight", "bold")
    .style("font-size", "16px")
    .style("opacity", 0);
