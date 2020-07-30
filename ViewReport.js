class ViewReport{
    constructor(){
       this.show();
    }
    display(){
        background(background10);
        this.show();
        viewReportNext.mousePressed (()=>{
            this.hide();  
            selectDisease.display();
            //selectDisease.display();
        })
        viewReportPrevious.mousePressed (()=>{
           this.hide();
           selectDisease.display();
                   
        })
        viewReportTip.mousePressed (()=>{
            this.hide();
            tip.display();
                    
         })
    }
    show(){
        viewReportNext.show();
        viewReportPrevious.show();
        viewReportSafe.show();
        viewReportTip.show();
    }
    hide(){
        viewReportSafe.hide();
        viewReportNext.hide();
        viewReportPrevious.hide();
        viewReportTip.hide();
    }
}