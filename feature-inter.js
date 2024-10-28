const svg = d3.select("svg");

// Define gray arrow marker for directional arrows
svg.append("defs").append("marker")
   .attr("id", "arrow-gray")
   .attr("viewBox", "0 0 10 10")
   .attr("refX", 9)
   .attr("refY", 5)
   .attr("markerWidth", 6)
   .attr("markerHeight", 6)
   .attr("orient", "auto")
   .append("path")
   .attr("d", "M 0 0 L 10 5 L 0 10 Z")
   .attr("fill", "#777");

// Draw the gender-neutral person icon (Store Assistant)
svg.append("circle")
   .attr("cx", 500)
   .attr("cy", 50)
   .attr("r", 15)
   .attr("fill", "#777");

svg.append("path")
   .attr("d", d3.arc()
      .innerRadius(0)  
      .outerRadius(30)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
   )
   .attr("transform", "translate(500, 90)")
   .attr("fill", "#777");

svg.append("text")
   .attr("x", 500)
   .attr("y", 30)
   .attr("text-anchor", "middle")
   .attr("font-size", "12px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#777")
   .text("Store Assistant");

// UI Component
svg.append("rect")
   .attr("x", 250)
   .attr("y", 200)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 325)
   .attr("y", 235)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("UI Component");

// Authentication Service
svg.append("rect")
   .attr("x", 750)
   .attr("y", 200)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 825)
   .attr("y", 235)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Authentication Service");

// Order Service
svg.append("rect")
   .attr("x", 250)
   .attr("y", 450)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 325)
   .attr("y", 485)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Order Service");

// Orders Database
svg.append("rect")
   .attr("x", 750)
   .attr("y", 450)
   .attr("width", 150)
   .attr("height", 60)
   .attr("fill", "#777")
   .attr("stroke", "#777")
   .attr("stroke-width", 2);
svg.append("text")
   .attr("x", 825)
   .attr("y", 485)
   .attr("text-anchor", "middle")
   .attr("font-size", "14px")
   .attr("font-family", "Trebuchet MS, sans-serif")
   .attr("fill", "#fff")
   .text("Orders Database");

// Function to create sticky notes
function createSticky(x, y, text1, text2) {
    const rect = svg.append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", 100)
        .attr("height", 40)
        .attr("fill", "yellow")
        .style("opacity", 0);

    const textLine1 = svg.append("text")
        .attr("x", x + 50)
        .attr("y", y + 15)
        .attr("text-anchor", "middle")
        .attr("font-size", "10px")
        .attr("fill", "#333")
        .attr("font-family", "Trebuchet MS, sans-serif")
        .text(text1)
        .style("opacity", 0);

    const textLine2 = svg.append("text")
        .attr("x", x + 50)
        .attr("y", y + 30)
        .attr("text-anchor", "middle")
        .attr("font-size", "10px")
        .attr("fill", "#333")
        .attr("font-family", "Trebuchet MS, sans-serif")
        .text(text2)
        .style("opacity", 0);

    return { rect, textLine1, textLine2 };
}

// Stickies for each line
const stickies = [
    createSticky(400, 100, "Spoofed", "Identity"),
    createSticky(600, 100, "Social", "Engineering"),
    createSticky(500, 260, "Session", "Hijacking"),
    createSticky(400, 360, "Tampering", "with Inputs"),
    createSticky(650, 500, "Code", "Injection")
];

// Data Flow Lines with hover effects
svg.append("line")
   .attr("x1", 500)
   .attr("y1", 65)
   .attr("x2", 325)
   .attr("y2", 200)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)")
   .on("mouseover", () => stickies[0].rect.style("opacity", 1))
   .on("mouseout", () => stickies[0].rect.style("opacity", 0));

// Repeat for each remaining line with the corresponding sticky
// Store Assistant -> Authentication Service
svg.append("line")
   .attr("x1", 500)
   .attr("y1", 65)
   .attr("x2", 825)
   .attr("y2", 200)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)")
   .on("mouseover", () => stickies[1].rect.style("opacity", 1))
   .on("mouseout", () => stickies[1].rect.style("opacity", 0));

// UI Component -> Authentication Service
svg.append("line")
   .attr("x1", 400)
   .attr("y1", 230)
   .attr("x2", 750)
   .attr("y2", 230)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)")
   .on("mouseover", () => stickies[2].rect.style("opacity", 1))
   .on("mouseout", () => stickies[2].rect.style("opacity", 0));

// UI Component -> Order Service
svg.append("line")
   .attr("x1", 325)
   .attr("y1", 260)
   .attr("x2", 325)
   .attr("y2", 450)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)")
   .on("mouseover", () => stickies[3].rect.style("opacity", 1))
   .on("mouseout", () => stickies[3].rect.style("opacity", 0));

// Order Service -> Orders Database
svg.append("line")
   .attr("x1", 400)
   .attr("y1", 480)
   .attr("x2", 750)
   .attr("y2", 480)
   .attr("stroke", "#777")
   .attr("stroke-width", 4)
   .attr("marker-end", "url(#arrow-gray)")
   .on("mouseover", () => stickies[4].rect.style("opacity", 1))
   .on("mouseout", () => stickies[4].rect.style("opacity", 0));
