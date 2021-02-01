class Roof{
	constructor(x,y,width,height){
		var options={
			isStatic:true			
		}
		this.body=Bodies.rectangle(x,y,width,height,options);
		this.width=width;
        this.height=height;
 		World.add(world, this.body);

	}
	display()
	{
		var Pos=this.body.position;		
		
		//translate(groundPos.x, groundPos.y);
		rectMode(CENTER);
		strokeWeight(4);
		fill(255);
		rect(Pos.x,Pos.y,this.width,this.height);
		
	}

};  