AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "Captain-Aero",
        title: "Captain-Aero",
        url: "assets/captain-aero.jpg",
      },
      {
        id: "Outer-Space",
        title: "Outer-Space",
        url: "assets/outer space.jpg",
      },

      {
        id: "Spider-Man",
        title: "Spider-Man",
        url: "assets/spiderman.jpg",
      },
      {
        id: "Super-Man",
        title: "Super-Man",
        url: "assets/superman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id)
      // Thumbnail Element
      const thumbnailEl=this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl)
      // Title Text Element
      const titlelEl=this.createTitle(position,item)
      borderEl.appendChild(titlelEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder:function(position,id){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:22,
      height:30
    });
    
    entityEl.setAttribute("material",{
      color:"#fff",
      
    })
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("cursor-listener", {});
    return entityEl
  },
  createThumbnail:function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:20,
      height:28
    });
    entityEl.setAttribute("position",{x: 0,y: 0.5,z: 0.1})
    entityEl.setAttribute("material",{
      src:item.url
      
    })
    return entityEl
  },
  createTitle:function(position,item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:60,
      color:"#e65100",
      value:item.title

    })
    const elPosition=position
    elPosition.y=-20
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("position",elPosition)
    entityEl.setAttribute("position",position)

    return entityEl
  }
});
