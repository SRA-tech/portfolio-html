# CSS Learning Basic (Cascade Style Sheet)
- CSS Comments: /*Code...*/
1. Ways to add CSS
- Inline CSS - Directly add css with HTML elements in the same line
a. Example: <header style="background-color: green">
b. Key point: We have to each element and use inline css for multiple sections
- Internal CSS - In Head Section we can declare all our CSS
a. Example: <head><style>header, id(#aboutme){background-color: green}</style><head/>
b. Key point: We can use multiple css from one location
- External CSS - To reduce code size, use external file(Optimize code)
a. Example: create a file as style.css-->header,#about {background-color: green;}--> index.html--> <link rel="stylesheet" href="style.css">
b. Key point: Code optimized, more readable, and easy maintainable 

2. CSS Selector 
- Selector Syntax: selector{property: value;}--> body{background-color: green;}
- Element selector/Tag selector--> h1{background-color: red;} 
- Gouping Selector--> h1,h2,p{background-color: red;}
- Nested Selector--> header > nav > ul > li > a{color:red;}
- Attribute Selector-->
- Pseudo Element Selector-->(::) Pertial element select to do something  
- Pseudo Class Selector-->(:) Multiple or whole select to do something 
- Universal Selector--> *{color: red;} (note: Apply to all.)
- ID Selector(used for identify uniquely, for different use different id name)
 HTML File: <li><a href="#about" id="link1" title="About Me">About</a></li>
            <li><a href="#skills" id="link2" title="My Skills">My Skills</a></li>
            <li><a href="#projects" id="link3" title="My Projects">My Projects</a></li>
 CSS File: #link1{color: green;} 
- Class Selector(used for same style in multiple elements)
 HTML File:  <li><a href="#about" class="nav-link" title="About Me">About</a></li>
            <li><a href="#skills" class="nav-link" title="skills">About</a></li>
            <li><a href="#projects" class="nav-link" title="projects">About</a></li>
 CSS File: .nav-link{background-color: green; color: white;} 

- CSS3 Variable--> :root{--primary-color:#4caf50; --secondary-color:#fff; --background-color: #f4f4f4;}

3. Combinators
4. CSS Specificity (https://specificity.keegan.st/)
- Use to priorityfy attribute, ID, Class,
/* a=number of id's*/, 
/* b=number of class, psedue class, attributes*/, 
/* c=number of elments, psedue elements*/

5. Typography--> (font, text, color, icon)
- Use for Font p{font-size:2rem; font-weight: bold; font-style: italic; font-family: ''Roboto', sans-serif;}

6. Box Model--> (content, padding, border, mergin) (height, width)
8. Card design

# CSS Learning Intermediate (Cascade Style Sheet)
1. Backgroud properties
2. Basic layout - float, positioning, flex, grid 