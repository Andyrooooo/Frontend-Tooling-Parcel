# Frontend Tooling

## Turbopack
### **What problem is this tool trying to solve?**
#### The problem Turbopack is trying to solve is speed from my understanding. To elaborate a little more when working on applications regardless of its size it will bundle your project together at blazing fast speeds. The way it does this is with the incremental computation engine under the hood or (turbo build engine). Another stride Turbopack is trying to make is they are trying to make it universal and not attached to any framework like next.js or in their words their trying to build something that is framework independent.
![Turbopack](https://portal.gitnation.org/contents/turbopack-why-how-when-and-the-vision)

### **How does it solve the problem? AKA, what makes this tool unique?**
#### Normally with a bundler it will need to read files then bundle them together, then concatenate to create lots of different tasks. With turbopack it remembers what each function was called with and what it returned, so on the first run it reads a bunch of files and bundles them together, then concatenates them and remembers all the outputs. Then, the next time it runs, and for example say you changed a file so it will read that file again and bundle it again and concatenate but it doesn't need to read other files within the project or their respective bundled contents again because it knows what they have returned and knows you haven’t changed them, and this is what I mean by the incremental computation that makes turbopack so special. 

### **When shouldn't you use this tool?**
#### I couldn’t really think of any other reasons not to use it, as I said earlier it works well with "Large projects" and will still work with smaller projects as well with insane speeds. The only downside I can see is that Turbopack is very new, so it may not be as stable at the moment so air with a side of caution on it.

### **Name two features you find interesting/useful and explain why they are helpful.**
*	One awesome feature of Turbopack is the fast HMR, which is awesome for your build and updates the code for you without having to refesh or reload your project.

*	Another great feature of Turbopack is its abilities at compiling, so they have the page-level compiling, which means it will only compile the page you are currently requesting. They also have request-level compilation, which will only compile code that you request like say if you just request the HTML file, then it will only compile that file and no other references within that file. Another side note from this request level is that Turbopack also knows not to compile source maps unless dev tools are open.

### **What other information should someone know before using this tool?**
#### One of the only other things I would say about turbopack is what I described earlier, it is very new and so I would be cautious if you were to use it in a projcet. It's fully production ready and we might need to wait a little longer to see what the future has for it.


## Vite
### **What problem is this tool trying to solve?** 
#### Vite is put in almost the same category as Turbopack, it is not a traditional bundler but a bundler nonetheless and aims to provide a faster and leaner development experience. It is also as you described in class as framework agnostic. 

### **How does it solve the problem? AKA, what makes this tool unique?**
#### Vite is unique in the way that it bundles your project. What normal bundlers do is they have their entry point and all its possible routes, and all of our modules and all possibilities are bundled together then the server is ready. The problem with this is it has to rebundle everything every time and the larger your project gets the slower its speeds are. Vite takes the dependencies that don’t change often and prebundles them in esbuild. Vite also uses route-based code splitting to figure out what parts of the code actually need to be loaded and it does this on the fly so it doesn't have to rebundle everything. It delivers the code using native ES module support in modern browsers which allows the browser to take the job of bundling and development, but for production vite uses rollup to bundle, tree shake (dead code elimination), and to implement other performance optimizations.

### **When shouldn't you use this tool?**
#### As Vite boasts that it is a new age tool it does not create bundles for legacy browsers, web components so it won't support older browsers and at that point those running old browsers should not use it in this case. Another interesting thing is that Vite does not have a lot of support with Jest, which is one of the larger testing frameworks and also one we used in class.

### **Name two features you find interesting/useful and explain why they are helpful.**
*	Vite also has optimized async chunk loading, to explain this we'll talk about Rollup. Rollup generates common chunks which is shared code when you have dynamic imports, this can result in multiple network calls and as one chunck (chunck A) is parsed by the browser it then realizes it also needs the common chunk (chunck C) between it and another async chunck (chunck A) so it then has to go back out and request that. Vite rewrites this so that if one chunck (chunck A) is needed it automatically sends along the common chunck (chunck C) in parallel and even other dependencies that may be needed after the common chunck (chunck C) which eliminates network round trips. 

*	Vite also has multi-page support right out of the box you can add a file for HTML, and it let you starting building right then and there with no other configurations required, and to build for production you just need to add your additional entry points in the veet.config.js file.

*	Vite's library mode which makes it easier to develop browser-oriented libraries, also has automatic CSS code splitting, which means it’s only going to load the CSS code needed for the specific part of the application that you are using. 

### **What other information should someone know before using this tool?**
#### As we explained earlier it uses esbuild for development and then in production uses Rollup, so with that in mind using two different tools could result in unforeseen bugs that are hard to fix. Another thing to know is that it is still relatively new, and so this may be a deterrent but air with a side of caution as it may not be as stable just yet.


## Parcel
### **What problem is this tool trying to solve?**
#### Parcel is trying to make bundling your projects much easier, as it does take some time to download but it is pre-configured, meaning right out of the box it will package your files together without having to mess around with settings like other bundlers will and get lost in the process.  

### **How does it solve the problem? AKA, what makes this tool unique?**
#### So, as I said before it is ready to go right out of the box so, it's more for if you have a small project or new projects, and prototypes without any configuration. The awesome thing about parcel as well is when getting set up you only need to setup like an index.html file and include the script with a relative path and that’s all you need to do for it to bundle. 

### **When shouldn't you use this tool?**
#### Now as I said before Parcel only handles smaller projects or is beneficial when you’re getting started, but if your project becomes bigger or you need more customization to the project you’re going to need some configurations. The way it's explained is that Parcel is an enterprise level application and being that it needs no configuration, there isn't much customization to it really. 

### **Name two features you find interesting/useful and explain why they are helpful.**
*	One interesting thing about Parcel is it does automatic transforms. So, it’ll take your SCSS and turn it into CSS, it can take your modules and convert it to vanilla JavaScript, it can use Babel to transpile your JavaScript so you can use brand new features of JavaScript, it will transpile all the way down so that older browsers can actually use it.

*	Another interesting feature is it does hot module replacement, so that while you’re editing your code its automatically going to swap that code out in the browser without refreshing the page so you can see the changes live without refreshing the page every time. 

### **What other information should someone know before using this tool?**
#### Another part about Parcel is its claim at speed when it bundles your project and based on some test, I have seen in comparison to Webpack (there is a lot of comparisons to Webpack and Parcel) Parcel is very slow for the first time bundling, but every bundle after that is incredibly fast in comparison.

## What makes each one unique? What makes them different? When would you use one over the other, and why?

#### So first off, we’re going to talk about Parcel, now the big takeaway from Parcel is that it is automatic and ready to go out of the box, with low configuration. This is what you want for someone who is just starting out and wants something to bundle their project and not get lost in the complex configurations. Something I did also mention earlier is that yes, it is slow with the first bundle but after that it’s very fast. With that in mind if I was just starting a project I would use Parcel, but if I was trying to do a more complex and large project, I would stick with something like Webpack. 
#### Now, let’s talk about Turbopack and Vite together. Both are the new generation of bundlers with insanely fast speeds. Turbopack at times can be vaster than Vite, because of how it functions under the hood. Vite will do as little bundling as possible, will send all files to the browser separately and this essentially turns them into native ESM modules and the browser does all the linking of the modules for you. So, to break it down, the browser will request all of those individually, and doing this when your project is large or gets larger, with tons and tons of requests Vite will stay super-fast but the browser will get really slow because the browser is trying to get all these modules in and understand them. Now what Turbopack does is it takes all of the modules and bundles them together into one big module to minimize the number of requests made to the browser, so the browser has to do less work and all the hard work is done by Turbopack which it can do much faster than the browser can. So, as far as I can tell they both perform vastly better than other bundlers we’ve seen but Turbopack may perform better when the project becomes larger with many more modules and so it really just boils down to size of your project is where you would choose one or the other. 

#### Lastly I have built a very basic app called "Squarey", this app utilizes Parcels easy configuration and allows me to develop the app with only a sinle SCSS file for it's styling and just reference all my files into the HTML file. I was curious to see how its Hot Module Replacement worked and I loved it without having to go back and reload the server. I can also attest that the first time bundling my project was a bit slow but immensly faster after that. I did notice that when I would change anything to the HTML file it would crash so I would have to re-run my test script to get it back. Other than that it's a great tool and worked great for my small project.
