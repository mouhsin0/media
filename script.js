class Media{
    constructor(){
        this.title = document.getElementById("title")
        this.audio = document.getElementById("audio")
        this.play = document.getElementById("play")
        this.next = document.getElementById("next")
        this.back = document.getElementById("back")
        this.turn;
        this.play.addEventListener("click", ()=>{
            this.me();
        })
        // for open audio in oneclik
        // this.me();
        // ==============================
        // ============= audio =========
        this.audo = [];
        this.audo[0] = "a.mp3";
        this.audo[1] = "b.mp3";
        this.audo[2] = "c.mp3";
        // ========== title ===============
        this.tile = [];
        this.tile[0] = "ZAD - A"; 
        this.tile[1] = "ZAD - B"; 
        this.tile[2] = "ZAD - C";
        // ============ counter ==========
        this.counter = 0;
        this.result();
        // event click 
        this.next.onclick = ()=>{
            if(this.counter < this.audo.length - 1){
                ++this.counter
                this.turn = false;
            }
            else{
                this.counter = 0;
                this.turn = false;
            }
            this.result();
        }
        this.back.onclick = ()=>{
            if(this.counter > 0){
                --this.counter;
                this.turn = false
            }
            else{
                this.counter = this.audo.length - 1;
                this.turn = false
            }
            this.result();
        }
    }
    result(){
        this.audio.src = this.audo[this.counter];
        this.title.innerHTML = this.tile[this.counter]
        this.me()
    }
    me(){
        if(this.turn == false){
            this.audio.play()
            this.play.src = "pause.png"
            this.turn = true;
        }
        else{
            this.audio.pause();
            this.play.src = "play.png"
            this.turn = false;
        }
    }
}
onload = new Media();
function hello(){
    let audioo = document.getElementById("audio")
    let vol = document.getElementById("vol")
    let speeed = document.getElementById("speed");
    audioo.volume = 50 / 100 ;
    vol.onchange = ()=>{
        audioo.volume = vol.value / 100
    }
    speeed.onchange = ()=>{
        audioo.playbackRate = speeed.value / 100;
    }
}
hello()
// function background color    
function color(){
    document.getElementById("color1").addEventListener("click", ()=>{
        document.body.style.background = "black";
        document.body.style.color = "white";
    })
    document.getElementById("color2").addEventListener("click", ()=>{
        document.body.style.background = "white";
        document.body.style.color = "black";
    })
    document.getElementById("color3").addEventListener("click", ()=>{
        document.body.style.background = "rgb(30 210 229 / 69%)";
        document.body.style.color = "white";
    })
    document.getElementById("color4").addEventListener("click", ()=>{
        document.body.style.background = "rgb(166 119 115)";
        // document.body.style.color = "white";
    })
}
color();