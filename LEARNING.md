# HTML Learning

1. Hw website works?
- client - server - model
- http request and response
- web design fundamental - HTML, CSS, JS

2. What is HTML?

3. Why HTML?

4. Enviornment set up

- Code Editor: VS Code 
- Browser: Google Chrome
- Version Control: Repository

5. Basic Tags, Styling
- Pair Tag (</></>)
- Container Tag (</ >)
- Empty Tag (</ has no closing tag)

6. Debugging: https://validator.w3.org/
- choose file and check code
7. Comment: <!--  -->
- View extention frm VS Code
- Live Server (Web Page), Live Preview (Preview on the VS Code)

8. Heading, Paragraph, Line Breaks, Horizontal rule
- Heading Tag: For Text sizing Large to small
-- <h1></h1>, <h2></h2>, <h3></h3>, <h4></h4>, <h5></h5>, <h6></h6>
- Paragraph use <p></> Tag
- Break a line use <br>
- Horizental Rule(line)
9. Semantic HTML Tag(kinda Meaningful) vs Non-Semantic HTML
- Semantic HTML Tags - header, footer, section, main, form, table
- Non-Semantic HTML tags - div, span
- <div></div> element kept in divition tag
10. Entity
- Symbol (&copy;(Copyright)), Emoji, Logo etc
- Unicode: https://symbl.cc/en/unicode-table/
11. Text formatting tags
- <strong>Bold Text</strong> and
- <b>Bold Text</b>
- <em>Italic Text</em>
- <u>Under Line Text</u>
- <mark>Highlight Text</mark>
- <del>Bold Text</del> <br />
- (a+b)<sup>2</sup>
- (H20)<sub>2</sub>
12. List: OrderList(ol tag), Un-OrderList(ul Tag), 
- To change the order list use type = "type of"
- <ol type= "A" or "a"><li>List Item</li></ol> (Default 1,2,)
- <ol start= "E" or "5"><li>List Item</li></ol> (reversed, Circle) 
- <ul start= "E" or "5"><li>List Item</li></ul> (reversed)
13. Nested List:
14. Definition under dl tag dt(title), dd(defination)
-   <dl><dt>HTML</dt><dd>Hyper Text Markup Language</dd></dl>
15. Link and Navigation
- Absolute link vs Relative link
- a tag, href(Hyper Text Reference), 
- target(Open a new child page), or "target"="_self", "_parant", _top
- title: Use for Hover toast
16. Image 
17. Basic Table
18. Basic Form
19. Deploy

*** Intermediate ***
1. Mata tag and SEO
- Meta tag used for to help search engine optimization
2. Adding font-awesome icons google font
- By default font (Sensiri)
- https://fontawesome.com/
- CDN https://cdnjs.com/libraries/font-awesome
- Body color use head tag->style tag->body->{choose color} 
- Font style: https://fonts.google.com/
- head tag -> google font link
- style tag -> body-> {font-family: "Roboto", sans-serif;}
- above two are in bundle to use google font, have to declare font-family also
3. Advanced table
- row span(A value combindly show in multiple rows)
4. Advanced form
5. Form data send to your email
- https://formspree.io/forms endPoint: https://formspree.io/f/mlderkop
6. Multimedia
- i-frame src"google map address" alter width and hight etc. 
8. html5 elements
- https://www.tutorialrepublic.com/html-reference/html5-tags.php
- Progress bar etc

*** Advance HTML ***
1. More advanced from Slider bar <Input type="color/range">
2. Datalist
- Auto-Complete list
3. Fieldset
- Grouping some fields
4. Legend
- Grouping heading/ Captioning
5. Web accessibility
- use semantic(meaningful) tag
- use lang attribiute for language
- use heading tags in order (h1->h2->...h6)
- use only one h1 tag recommended
- use alt attribute for image (Mandatory)
- contrast ratio (Color, background, font size etc.)
- use meaningful link text
- Keep relation with label (for)  + input (id)
6. HTML5 API
7. HTML templets and web components
8. HTML sources for
- Symbols (https://symbl.cc/en/),(https://www.w3schools.com/html/html_symbols.asp)
- Icons (https://fontawesome.com/icons)
- Material icons/fonts (https://fonts.google.com/icons) 
- Emojis (https://emojipedia.org/)
- Character (https://copychar.cc/)
- Colors (https://colorhunt.co/), (https://color.adobe.com/)
- Images (https://unsplash.com/)
9. Learning resources
- HTML (https://developer.mozilla.org/en-US/docs/Web/HTML)
- (https://www.htmldog.com/guides/javascript/), (https://www.w3schools.com/html/)

# CSS Learning (Cascade Style Sheet)
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

5. Typography--> Use for Font p{font-size:2rem; font-weight: bold; font-style: italic; font-family: ''Roboto', sans-serif;}

6. Box Model
7. Backgroud properties
8. Basic layout - float, positioning
9. Card design
10. 


