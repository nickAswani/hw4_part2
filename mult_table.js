   
/* File: mult_table.js
 * GUI Assignment: Creating an Interactive Dynamic Table
 * Nicholas Aswani, UMass Lowell Computer Science, nicholas_aswani@student.uml.edu
 * copyright (c) 2021 by Nicholas. All rights reserved. May be freely copied or excerpted for 
 * educational purposes with credit to the author.
 */

// validation function created with examples from https://stackoverflow.com/questions/14966465/validating-multiple-checkboxes-using-jquery-validation
$(document).ready(function() {
   $("#form1").submit(function(e){
      e.preventDefault()
   }).validate({
   rules: {
      max_row_value: {
         required: true,
         number: true,
         max: 50,
         min: -50
      },
      max_col_value: {
         required: true,
         number: true,
         max: 50,
         min: -50         
      },
      
      min_row_value: {
         required: true,
         number: true,
         max: 50,
         min: -50
      },
      
      min_col_value: {
         required: true,
         number: true,
         max: 50,
         min: -50
      }
   },
   messages: {
      max_row_value: {
         required: "Please enter a valid number",
         number: "Please enter only a whole number",
         max: "The largest digit that can be entered is 50",
         min: "The smallest digit that can be entered is -50"
      },
      
      max_col_value: {
         required: "Please enter a valid number",
         number: "Please enter only a whole number",
         max: "The largest digit that can be entered is 50",
         min: "The smallest digit that can be entered is -50"
         
      },
      
      min_row_value: {
         required: "Please enter a valid number",
         number: "Please enter a whole number between -50 and 0",
         min: "The smallest digit that can be entered is -50",
         max: "The largest digit that can be entered is 50"
      },
      
      min_col_value: {
         required: "Please enter a valid number",
         number: "Please enter a whole number between -50 and 0",
         min: "The smallest digit that can be entered is -50",
         max: "The largest digit that can be entered is 50"
      }
   },
 // after validation this submit handler handles form submition 
 submitHandler: createTable
 // submitHandler: function() { 
 // createTable();
 // return false;
   });
 
 $("#slider1").slider({
   min: -50, 
   max: 50,
   // step: 1, 
   // value: 0,
   slide: function( event, ui ) {
      $("#max_row_value").val(ui.value);
   }
 });
 $("#slider2").slider({
   min: -50, 
   max: 50,
   // step: 1, 
   // value: 0,
   slide: function( event, ui ) {
      $("#min_row_value").val(ui.value);
   }
 });
 $("#slider3").slider({
   min: -50, 
   max: 50,
   // step: 1, 
   // value: 0,
   slide: function( event, ui ) {
      $("#max_col_value").val(ui.value);
   }
 });
 $("#slider4").slider({
   min: -50, 
   max: 50,
   // step: 1, 
   // value: 0,
   slide: function( event, ui ) {
      $("#min_col_value").val(ui.value);
   }
 });
 
 //slider1
 $("#max_row_value").change(function(){
   var prevVal1=$("#slider1").slider("option", "value");
   var currVal1=$(this).val();
   
   if (isNaN(currVal1) || currVal1 < -50 || currVal1 > 100) {
         $("#slider1").val(prevVal1);
       } else {
         $("#slider1").slider("option", "value", currVal1);
       }
       
       if ($('#min_row_value').val()!=''){
         $("#form1").validate().element("#max_row_value");
         $("#form1").validate().element("#min_row_value");
       }
       if($("#max_col_value").val()!='' && $("#min_col_value").val() !='' && $("min_row_value").val() !='' && $("max_row_value").val() !=''){
       $("#form1").submit();
     }
   });
 
 //slider2
   $("#min_row_value").change(function(){
     var prevVal2=$("#slider2").slider("option", "value");
     var currVal2=$(this).val();
     
     if (isNaN(currVal2) || currVal2 < -50 || currVal2 > 50) {
           $("#slider2").val(prevVal2);
         } else {
           $("#slider2").slider("option", "value", currVal2);
         }
         if ($('#max_row_value').val()!=''){
           $("#form1").validate().element("#min_row_value");
           $("#form1").validate().element("#max_row_value");
         }
         if($("#max_col_value").val()!='' && $("#min_col_value").val() !='' && $("#min_row_value").val() !='' && $("max_col_value").val() !=''){
         $("#form1").submit();
       }
     });
 
   
 //slider3
 $("#max_col_value").change(function(){
   var prevVal3=$("#slider3").slider("option", "value");
   var currVal3=$(this).val();
     
   if (isNaN(currVal3) || currVal3 < -50 || currVal3 > 50) {
         $("#slider3").val(prevVal3);
       } else {
         $("#slider3").slider("option", "value", currVal3);
       }
       if ($('#min_col_value').val()!=''){
         $("#form1").validate().element("#min_col_value");
         $("#form1").validate().element("#max_col_value");
       }
       if($("#max_col_value").val()!='' && $("#min_col_value").val() !='' && $("#min_row_value").val() !='' && $("max_col_value").val() !=''){
       $("#form1").submit();
     }
   });
 
 
 //slider4
 $("#min_col_value").change(function(){
   var prevVal4=$("#slider4").slider("option", "value");
   var currVal4=$(this).val();
   
   if (isNaN(currVal4) || currVal4 < -50 || currVal4 > 50) {
         $("#slider4").val(prevVal4);
       } else {
         $("#slider4").slider("option", "value", currVal4);
       }
       if ($('#max_col_value').val()!=''){
         $("#form1").validate().element("#min_col_value");
         $("#form1").validate().element("#max_col_value");
       }
       if($("#max_col_value").val()!='' && $("#min_col_value").val() !='' && $("#min_row_value").val() !='' && $("max_col_value").val() !=''){
       $("#form1").submit();
     }
   });
 
 //validates inputs
   var index=0;
   $("addTabButton").click(function(){
   var flag = true;
   if($('#form1').valid()){
     flag =false;
   }
   if(flag)
   return;
   
   
   index++;
   tabNumber= "#" + index;
   
   // Tabs
   var t_1 = Number(document.getElementById("min_row_value").value);
   var t_2 = Number(document.getElementById("max_row_value").value);
   var t_3 = Number(document.getElementById("min_col_value").value);
   var t_4 = Number(document.getElementById("max_col_value").value);
   
   // create tab vals 
   $("#Tabs ul").append("<li><a href='#"+ index +"'> Tab " + index + " " + t_1 + "," + t_2 + "," + t_3 + "," + t_4 + "</a> <input type= 'checkbox' class=\"checkbox_check\" /> </li>");
   
   $("#Tabs").append("<div id='" + index + "'>" + "</div>");
   //create a tab
   $("#Tabs").tabs();
   //new tabs 
   $("#Tabs").tabs("refresh");
  //active tab
   $("#Tabs").tabs("option", "active", -1 );
   
  //submit form if correct
   if($("#max_col_num").val()!='' && $("#min_col_num").val() !='' && $("#min_row_num").val() !='' && $("#max_row_num").val() !=''){
   $("#form1").submit();
   }
   })
   
   // delete tab 
   $("#deleteTabButton").click(function(){
     $("#Tabs ul li").each(function(){
      if ($(this).find(".checkbox_check").is(':checked')){
      var panelId = $(this).closest("li").remove().attr("aria-controls");
      $("#" + panelId).remove();
      $("#tabs").tabs("refresh");
      }
     })
   });
   
   }); //end jQuery
   
 
   function createTable() {
     var max_row = document.getElementById("max_row_value").valueAsNumber;
     var max_col = document.getElementById("max_col_value").valueAsNumber;
     var min_row = document.getElementById("min_row_value").valueAsNumber;
     var min_col = document.getElementById("min_col_value").valueAsNumber;
  
       /* the following code creates the multiplication table and renders it via the html table */
    var table = document.getElementById("mult_table");   //holds the html table 
    var output=" ";  // to append html data
    for(var i = min_row; i<=max_row; i=i+1) {            //loop that creates rows 
        output+="<tr>";                                
     for(var j=min_col; j<=max_col;j=j+1) {         // the columns creation loop 
         if(i==min_row && j==min_col)              //for the first cell(row[0]column[0])
            output+="<th>&times;</th>";        //puts the x symbol in the first corner cell
         else {
         if(i==min_row || j== min_col)         // sets the header data; the first row and first 
            output +="<th>"+i*j+"</th>";
         else
            output +="<td>"+i*j+"</td>"; //sets the data for the rest of the columns and rows
         }
     }
     output+="</tr>";
  }
    
  document.getElementById("mult_table").innerHTML = output;
   table.innerHTML=output; //sets the the Html content of the table element
   return false;
  }