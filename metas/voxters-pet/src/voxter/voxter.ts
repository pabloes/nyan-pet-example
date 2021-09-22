export const createVoxter = (name:string, x:number, y:number, z:number, eyeIndex:number, mouthIndex:number, eyeColorIndex:number, headIndex:number) => {
    const callbacks = {
      onClick:null
    };
    const voxter = new Entity();   
    const shape = new GLTFShape(`metas/voxters-pet/models/nyancat_original.glb`)
    voxter.addComponent(shape);
    voxter.addComponent(new Transform({
      scale:new Vector3(0.25,0.25,0.25),
      position:new Vector3(2,1,2)
    }))
    engine.addEntity(voxter);
    
    const clip = new AudioClip("metas/voxters-pet/sounds/nyan_short.mp3")
    const source = new AudioSource(clip)
  //  voxter.addComponent(source);
    source.loop = true;
    source.playing = false;

    return {
      reproduce:()=>{
        source.playing = true;
        source.loop = true;
      },
      stop:()=>{
        source.playing = false;
      },
      onClick:(fn:any)=>{
        callbacks.onClick = fn;
      },
      applyDna:(dna:any)=>{

      },
      getEntity:()=>voxter,
      setPosition:(position:Vector3)=>{
        voxter.getComponent(Transform).position.copyFrom(position)
      },
      dispose:()=>{
        voxter.setParent(null);
        engine.removeEntity(voxter);
      },
      lookAt:(target:Vector3)=>{
        voxter.getComponent(Transform).lookAt(target);
      },
      update:(dt:number)=>{

      }
    };
  };
