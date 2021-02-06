export function recursiveInsertElement(currentName, files, folders, childrenData) {
 
    // do somthing here to update data and render 
  
    childrenData.forEach(child => {
      if(child.name === currentName) {
          child.children = [...files, ...folders];
      }
      else {
        if(child.children) {
          recursiveInsertElement(currentName, files, folders, child.children);
        }
          
       }
    
    })
  
  }