Fencer - The one stop shop for galactic goods

This is a e-commerce site project.  The goals for the project are to create a site where you can place orders, use the payment service Stipe to process payemnts, and see a list of past orders. Our theme for this project site are itmes you could by if you were a character in a sci-fi universe.

The depolyed site can be found at: https://heroku-complex.github.io/team-project-front-end/

The backend repository can be found at: https://github.com/Heroku-Complex/team-project-front-end

The deployed back end cand be found at: https://mudabish.herokuapp.com/


PLANNING:
We started the project by creating user stories for what our site should do:

As a user, I would like to:

    * see what products are available.
    * be able to compile the products I would like to purchase.
    * see a subtotal of my complied purchases.
    * be able to securely pay with a credit or debit card.
    * be able to see past orders.

Next we sketched out some rough wireframes of how we wanted our site to be laid out:
https://drive.google.com/open?id=0BxljZc10IXeSNDRKbTZ5Yk5CTkZHVGVyTEN6X3dCZXRMeWVn
https://drive.google.com/open?id=0BxljZc10IXeScHQ3eWE0cjZrMl9jOGp1a0tuVTA1SjdidlZJ

The next part of the planning stage was mapping out our ERDs for our Mongodb collections and defining our schema:
https://drive.google.com/open?id=0BxljZc10IXeSLThEZnFQU3RKQmp5d1h3RHBVaVlZWWZXaDlR
https://drive.google.com/open?id=0BxljZc10IXeSSWJwMlBEZEoxc0VMVV9zMVp2aXJRWFRKMHgw

Our last step for the planning phase was discussing roles and goals for the sprint.  We discussed the steps that needed to be done and made plans to meet twice a day to discuss our progress and next steps.

WORKFLOW:
We divided tasks and started work on back end and front end repositories to help avoid team members working in the same files.  We worked to get minimum frameworks of code in each so that we could have code to work with in both places to start testing code.

Once we had starter code, a pair of us started working on implementing Stripe payment system into our site.  Despite really good docs, this was one of the most challenging aspects of the project.  There are many ways to use Stripe and it was difficult for us to find a cohesive flow of code.  In addition, Stripe first sends a token before the POST request that needs to be included in the POST request.  The Dashboard function of the site is amazing and there is very, very little that needs to be done to set up your account there.

Managing pull requests and merges was another challenge we faced.  Despite our careful planning we still encountered conflicts.  We found the manage conflicts feature very helpful in getting us sorted out.  In the final stages of the project we all worked from one computer to minimize creating new bugs when fixing old ones.

THINGS TO WORK ON:
  * Beautifying the site.
  * Adding category tabs
  * Adding a search function.
  * Putting in more details for purchase, like billing and shipping addresses.
