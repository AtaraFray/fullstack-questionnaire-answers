	
interface INode  {
    name: string;
    children: INode[];
}
const printsAllOffspringWithUsingRecursion = (inode:INode) => {
    // let indexOf:number = 0;
    if (inode.children.length > 0) {
        // console.log(inode.name);
        for (let index = 0; index < inode.children.length; index++) {
            console.log(inode.children[index].name);
            printsAllOffspringWithUsingRecursion(inode.children[index])
        }
    }
}

const printsAllOffspringWithoutUsingRecursion = (node:INode) => {
    let level = 0 ;
    let firstInLevel:INode = node ;
    let arrayOfCurrentChildreans: Array<INode> = []
    arrayOfCurrentChildreans.push(node);
    while (arrayOfCurrentChildreans.length > 0) {
      let current = arrayOfCurrentChildreans.shift();
      if(firstInLevel == current){
        level++;
        console.log();
      }
      if (current != undefined) {
        console.log(current.name);
        firstInLevel = current.children[0];
        for (let index = 0; index < current.children.length; index++) {
          arrayOfCurrentChildreans.push(current.children[index]);
        }
      }
      }
  }
const node:INode = {
    name: "Father",
    children: [
        {
            name: "David",
            children: [
                {
                    name: "Avi",
                    children: [
                        {
                            name: "Dani",
                            children: [
                                {
                                    name: "Nati",
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Oren",
                    children: [
                        {
                            name: "Tali",
                            children: []
                        },
                        {
                            name: "Nir",
                            children: []
                        }
                    ]
                },
            ]
        },
        {
            name: "Avital",
            children: [
                {
                    name: "Eli",
                    children: [
                        {
                            name: "Rut",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Dina",
            children: [
                {
                    name: "Yahel",
                    children: []
                }
            ]
        },
        {
            name: "Shalom",
            children: [
                {
                    name: "Hadas",
                    children: []
                },
                {
                    name: "Adina",
                    children: []
                },
            ]
        },

    ]
}
printsAllOffspringWithUsingRecursion(node);
console.log("=============================================");
printsAllOffspringWithoutUsingRecursion(node)


