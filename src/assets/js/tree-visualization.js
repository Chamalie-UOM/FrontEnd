let height = 600;
let width = 1200;
let tree;
let display_bootstrap = false;
let display_branch_length = false;


function my_menu_title(node) {
}

/**function validateTree(){
  $("#validate_newick").on("click", function (e) {
    var res = d3.layout.newick_parser($('textarea[id$="nwk_spec"]').val(), true);
    if (res["error"] || !res["json"]) {
      var warning_div = d3.select("#newick_body").selectAll("div  .alert-danger").data([res["error"]]);
      warning_div.enter().append("div");
      warning_div.html(function (d) {
        return d;
      }).attr("class", "alert-danger");
    } else {
      default_tree_settings();
      tree(res).svg(svg).layout();
      $('#newick_modal').modal('hide');
    }
  });
}**/


function my_style_nodes(element, node) {
  element.style("font-style", node['text-italic'] ? "italic" : "normal");
}

function patternChange(pattern) {
  if (tree.radial() !== (pattern === 'radial')) {
    tree.radial(!tree.radial()).placenodes().update();
  }
  if (pattern === 'straight') {
    tree.options({'branches': 'straight'}, true);
  } else if (pattern === 'linear') {
    tree.options({'branches': 'linear'}, true);
  }
}

function layoutChange(layout) {
  if (layout === 'phylogram') {
    tree.options({'align-tips': false}, true);

  }
  if (layout === 'cladogram') {
    tree.options({'align-tips': true}, true);
  }

}

function displayBranchLength(option) {
  display_branch_length = !!option;
  tree.style_nodes(annotate);
  tree.update();
}

function annotate(element, data) {
  if ("attribute" in data && data.attribute) {
    var branch_length = element.selectAll(".attribute");
    if (branch_length.empty() && display_branch_length) {
      if (data.attribute.length >= 4) {
        element.append("text").classed("attribute", true).text(data.attribute.substring(0, 6)).attr("dx", "-.6em").attr("text-anchor", "end").attr("alignment-baseline", "middle");
      } else {
        element.append("text").classed("attribute", true).text(data.attribute).attr("dx", "-.6em").attr("text-anchor", "end").attr("alignment-baseline", "middle");

      }
    } else if (!branch_length.empty() && (!display_branch_length)) {
      branch_length.remove();
    }
  }

}

function directionChange(direction, amount) {
  let which_function = direction === 'vertical' ? tree.spacing_x : tree.spacing_y;
  console.log(which_function);
  which_function(which_function() + amount).update();
}

function sort_nodes(asc) {
  tree.traverse_and_compute(function (n) {
    let d = 1;
    if (n.children && n.children.length) {

      d += d3.max(n.children, function (d) {
        return d["count_depth"];
      });
      console.log(d);
    }
    n["count_depth"] = d;
  });
  tree.resort_children(function (a, b) {
    return (a["count_depth"] - b["count_depth"]) * (asc ? 1 : -1);
  });
}

function sort(order) {

  if (order === 'sort_original') {
    tree.resort_children(function (a, b) {
      return a["original_child_order"] - b["original_child_order"];
    });
  }
  if (order === 'sort_ascending') {
    sort_nodes(true)
  } else if (order === 'sort_descending') {
    sort_nodes(false);
  }

}


function treeView(example_tree){
  tree = d3.layout.phylotree()
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
      'align-tips': false,
      'branches': 'linear'
    })
    .size([height, width])
    .node_circle_size(4.5);

  tree(d3.layout.newick_parser(example_tree))
    .style_nodes(my_style_nodes)
    .layout();

  tree.get_nodes()
    .filter(d3.layout.phylotree.is_leafnode)
    .forEach(function (tree_node) {
      d3.layout.phylotree.add_custom_menu(tree_node, // add to this node
        my_menu_title, // display this text for the menu
        function () {
          my_node_style_text(tree_node, tree);
        },
        // on-click callback include a reference to tree_node via transitive closure
        d3.layout.phylotree.is_leafnode // condition on when to display the menu
        // a function that takes node as an argument
      );
});


}

function validateTree(text) {
  let res = d3.layout.newick_parser(text, true);
  if (res['error'] || !res['json']) {

  } else {
    treeView(text);
  }
  return res['error'];
}




