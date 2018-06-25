var todo = (function() {
    try{
        "use strict";

        function greetMe() {
            var input = getInputValue();
            var div = buildDiv(input);
            render(div);
        }

        function init() {
            bindEvents();
            render();
        }

        function render(args) {
            var elem$ = document.getElementById("bottomcontainer");
            var brElem$ = document.createElement('br');
            brElem$.className = 'shtml_br';
            (args) ? elem$.appendChild(args) : "";
            (args) ? elem$.appendChild(brElem$) : "";
        }

        function bindEvents() {
            bindSubmitButton();
            bindhelloInput();
        }

        function bindSubmitButton() {
            document.getElementById("helloinputSubmit").addEventListener("click", function(){
                greetMe();
                resetInput();
            });
        }

        function bindhelloInput() {
            document.getElementById("helloInput").addEventListener("keypress", function(e) {
                if(e.keyCode === 13){
                    greetMe();
                    resetInput();
                }
            });
        }

        function getInputValue() {
            return document.getElementById("helloInput").value;
        }

        function resetInput() {
            document.getElementById("helloInput").value = "";
        }

        function buildDiv(args) {
            var div = document.createElement('div');

            div.className = "form-group output-section";

            (document.getElementsByClassName("output-section")[0]) ?
                document.getElementsByClassName("shtml_br")[0].remove() : 
                "";
            
            (document.getElementsByClassName("output-section")[0]) ?
                document.getElementsByClassName("output-section")[0].remove() : 
                "";
            
            sHTML = `
                <div class="output-section-header">
                    <h2>Output Section</h2>
                </div>
                <div class="container output-container" id="hellooutputConsume">
                    <h3>Hello ${args}</h3>
                </div>
                <br>
            `;
            div.innerHTML = sHTML;
            return div;
        }

        return {
            init: init
        }
    }
    catch(e){
        alert("Error Occured: " + e);
    }
    finally{

    }
})();

document.addEventListener("DOMContentLoaded", todo.init);