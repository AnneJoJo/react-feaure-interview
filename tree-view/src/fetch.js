export const getRoot = () => {
  return [{ "type": 'folder', "name": 'Root'}]
};



export const getFolderForParent = (value) => {
    // This is a mock for API call. It will fetch the data by folder name:
    switch(value) {
      case 'Root':
      	return [
		         {
		            "name":"Application",
		            "type":"folder",
		            "children":[]
		         },
		         {
		            "name":"Desktop",
		            "type":"folder",
		            "children":[]
		         },
		         {
		            "name":"Download",
		            "type":"folder"
		         },
		         {
		            "name":"utility.js",
		            "type":"file"
		         }
     	 ]
      case 'Application':
        return [
                {
                  "name":"tools",
                  "type":"folder",
                  },
                  {
                  	"name":"game",
                  	"type":"folder"
                  },
            ];

        case 'Desktop':
          return [
          			{
          				"name": "code",
          			 	"type":"folder"
          			}

          		];

        default:
        	return []
    }

};


export const getFilesForParent = (value) => {
    // do somthing
       switch(value) {
      	case 'Application':
	        return [
	                
		            	{
		                  "name":"application.js",
		                  "type":"file"
		               }];

		case 'tools': 
			return [

						{
	                        "name":"paint.js",
	                        "type":"file"
                     	}];

        case 'Desktop':
	        return [
			          	{ 
			          		"name":"hello.js",
			          		"type":"file"
			          	}
			       ];

        default:
        	return []
    }

};

