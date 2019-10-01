




function my_node_style_text(node, tree) {
  node['text-italic'] = !node['text-italic'];
  d3.layout.phylotree.trigger_refresh(tree);
}

function my_menu_title(node) {
  if (node['text-italic']) {
    return "Remove Italics";
  }
  return "Italicize node label";
}

function my_style_nodes(element, node) {
  element.style("font-style", node['text-italic'] ? "italic" : "normal");
}

function treeView(example_tree){
  var height = 500,
  width = 500;
  var tree = d3.layout.phylotree()
  // create a tree layout object
   .svg(d3.select("#tree_display"))
   .options({
     'left-right-spacing': 'fit-to-size',
     // fit to given size top-to-bottom
     'top-bottom-spacing': 'fit-to-size',
     // fit to given size left-to-right
     'selectable': true,
     // make nodes and branches not selectable
     'collapsible': true,
     // turn off the menu on internal nodes
     'transitions': true,
     // turn off d3 animations
     'zoom': true,
     'allign-tips':true
   })
   .size([height, width])
   .node_circle_size(0); // do not show "circles" at internal node
    

     
// render to this SVG element
    tree(d3.layout.newick_parser(example_tree))
    // parse the Newick into a d3 hierarchy object with additional fields
    .style_nodes(my_style_nodes)
    // handle custom node styling
    .layout();

     tree.get_nodes()
  .filter(d3.layout.phylotree.is_leafnode)
  .forEach(function(tree_node) {
  d3.layout.phylotree.add_custom_menu(tree_node, // add to this node
    my_menu_title, // display this text for the menu
    function() {
      my_node_style_text(tree_node ,tree);
    },
    // on-click callback include a reference to tree_node via transitive closure
    d3.layout.phylotree.is_leafnode // condition on when to display the menu
    // a function that takes node as an argument
  );
});

    
 }

// layout and render the tree
