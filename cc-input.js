const template= document.createElement('template');


template.innerHTML=`

    <style>
        p{
            color:red;
        }
        
    </style>

    <input type="text" placeholder="ingrese texto" />
    <br>
    <button>validar</button>
    <br>
    <input type="checkbox" id="captcha" />

    <p></p>

    

  
`;


//ESMASCRIPT 6
class CcInput extends HTMLElement{


    
    // creo el nombre del tag 
    static get is(){return 'cc-input';} // encuentre un tag llamdo <cc-input>

    // generamos el contructor ---> 
    constructor(){
        super();

        // es una variable privada
        this._shadowRoot = this.attachShadow({'mode':'open'});

        this._shadowRoot.appendChild(template.content.cloneNode(true));

        var inp = this._shadowRoot.querySelector('input');
        var btn = this._shadowRoot.querySelector('button');
        var p = this._shadowRoot.querySelector('p');
        var chk = this._shadowRoot.querySelector('#captcha')

        btn.addEventListener('click',()=>{
            console.log(inp.value);
        })

        inp.addEventListener('keypress',()=>{
            p.innerHTML = inp.value;
        })

        chk.addEventListener('click',()=>{
            // lanzar imagen de comprobacion
            alert("press");
        })


    } // fin del constructor

    // Ciclo de vida del htmlElement LifeCycle --->
}// fin de la clase

window.customElements.define(CcInput.is,CcInput);




