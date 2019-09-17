function treeView(example_tree){
    var height = 400,
    width = 400;
   var tree = d3.layout.phylotree()
   // create a tree layout object
     .svg(d3.select("#tree_display"))
     .options({
       'left-right-spacing': 'fit-to-size',
       // fit to given size top-to-bottom
       'top-bottom-spacing': 'fit-to-size',
       // fit to given size left-to-right
       'selectable': false,
       // make nodes and branches not selectable
       'collapsible': false,
       // turn off the menu on internal nodes
       'transitions': false
       // turn off d3 animations
     })
     .size([height, width])
     .node_circle_size(0); // do not show "circles" at internal node

// render to this SVG element
   tree(example_tree)
   // parse the Newick into a d3 hierarchy object with additional fields
     .layout();
 }

// layout and render the tree
