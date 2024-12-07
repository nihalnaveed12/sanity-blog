export type Post = {
    image: string; 
    createdDate: string;
    title: string;
    summary: string; 
    id:string;
    content: Block[];
    author: Author; 
  };
  
  export type Author = {
    author: string; 
    bio: string; 
    image: string; 
  };
  
  export interface Child {
    _key: string;
    _type: "span";
    text: string;
    marks: string[];
  }
  
  export interface Block {
    _key: string;
    _type: "block";
    style?: string;
    listItem?: "bullet" | "number";
    level?: number;
    markDefs?: string[];
    children: Child[];
  }
  
  
  
  