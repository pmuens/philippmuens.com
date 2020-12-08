---
title: Learning Deep Learning
description: A curriculum to self-study Machine- and Deep learning with zero prior knowledge.
coverImage: /assets/blog/learning-deep-learning/cover.jpg
date: '2019-03-05T14:42:00.000Z'
author:
  name: Philipp Muens
  website: https://philippmuens.com
  picture: /assets/blog/authors/philipp.jpg
ogImage:
  url: /assets/blog/learning-deep-learning/cover.jpg
---

[Deep Learning](https://en.wikipedia.org/wiki/Deep_learning), a branch of [Machine Learning](https://en.wikipedia.org/wiki/Machine_learning) gained a lot of traction and press coverage over the last couple of years. Thanks to significant scientific breakthroughs we're now able to solve a variety of hard problems with the help of machine intelligence.

Computer systems were taught to [identify skin cancer](https://cs.stanford.edu/people/esteva/nature/) with a significantly higher accuracy than human doctors do. Neural Networks can generate [photorealistic](https://arxiv.org/pdf/1511.06434.pdf)images of [fake people](https://thispersondoesnotexist.com/) and [fake celebrities](https://research.nvidia.com/sites/default/files/pubs/2017-10_Progressive-Growing-of/karras2018iclr-paper.pdf). It's even possible for an algorithm to teach itself [entire games](https://deepmind.com/blog/alphastar-mastering-real-time-strategy-game-starcraft-ii/) from first principles, surpassing human-level mastery after only a couple of hours training.

In summary Deep Learning is amazing, mystical and sometimes even scary and intimidating.

In order to demystify and understand this "Black Box" end-to-end I decided to take a deep dive into Deep Learning, looking at it through the practical as well as the theoretical lens.

With this post I'd like to share the Curriculum I came up with after spending months following the space, reading books and research papers, doing lectures, classes and courses to find some of the best educational resources out there.

Before we take a closer look I'd like to point out that the Curriculum as a whole is still a **work in progress and might change over time** since new material covering state-of-the-art Deep Learning techniques is released on an ongoing basis. Feel free to bookmark this page and revisit it from time to time to stay up-to-date with the most recent changes.

## The Approach

During the research phase which resulted in the following Curriculum I triaged dozens of classes, lectures, tutorials, talks, MOOCs, papers and books. While the topics covered were usually the same the required levels of expertise in advanced Mathematics and computer programming were not.

Generally speaking one can divide most educational Deep Learning resources in two categories: "Shallow" and "Deep". Authors of "Shallow" resources tend to heavily utilize high-level Frameworks and abstractions without taking enough time to talk about the underlying theoretical pieces. "Deep" resources on the other hand usually take the bottom-up approach, starting with a lot of Mathematical fundamentals until eventually some code is written to translate the theory into practice.

I personally believe that both is important: Understanding how the technology works under the covers while using Frameworks to put this knowledge into practice. The proposed Curriculum is structured in a way to achieve exactly that. Learning and understanding Deep Learning from a theoretical as well as a practical point-of-view.

In our case we'll approach our Deep Learning journey with a slight twist. We won't follow a strict bottom-up or top-down approach but will blend both learning techniques together.

Our first touchpoint with Deep Learning will be in a practical way. We'll use high-level abstractions to build and train Deep Neural Networks which will categorize images, predict and generate text and recommend movies based on historical user data. This first encounter is 100% practice-oriented. We won't take too much time to learn about the Mathematical portions just yet.

Excited about the first successes we had we'll brush up our Mathematical understanding and take a deep dive into Deep Learning, this time following a bottom-up approach. Our prior, practical exposure will greatly benefit us here since we already know what outcomes certain methodologies produce and therefore have specific questions about how things might work under the hood.

In the last part of this Curriculum we'll learn about Deep Reinforcement Learning which is the intersection of [Reinforcement Learning](https://en.wikipedia.org/wiki/Reinforcement_learning) and Deep Learning. A thorough analysis of [AlphaGo Zero](https://deepmind.com/blog/alphago-zero-learning-scratch/), the infamous agent that learned the [Go board game](<https://en.wikipedia.org/wiki/Go_(game)>) from scratch and later on played against itself to become basically unbeatable by humans, will help us understand and appreciate the capabilities this approach has to offer.

During our journey we'll work on two distinct Capstone projects ("Capstone I" and "Capstone II") to put our knowledge into practice. While working on this we'll solve real problems with Deep Neural Networks and build up a professional portfolio we can share online.

Once done we'll be in a good position to continue our Deep Learning journey reading through the most recent academic research papers, implementing new algorithms and coming up with our own ideas to contribute to the Deep Learning community.

## The Curriculum

As already discussed above, Deep Learning is… Deep. Given the traction and momentum, Universities, Companies and individuals have published a near endless stream of resources including academic research papers, Open Source tools, reference implementations as well as educational material. During the last couple of months I spent my time triaging those to find the highest quality, yet up-to-date learning resources.

I then took a step back and structured the materials in a way which makes it possible to learn Deep Learning from scratch up to a point where enough knowledge is gained to solve complex problems, stay on top of the current research and participate in it.

### 1. A Practical Encounter

We begin our journey in the land of Deep Learning with a top-down approach by introducing the subject "Deep Learning" in a practical and playful way. We won't start with advanced college Math, theoretical explanations and abstract AI topics. Rather we'll dive right into the application of tools and techniques to solve well-known problems.

The main reason of doing this is that it keeps us motivated since we'll solve those problems with state-of-the-art implementations which will help us see and understand the bigger picture. It's a whole lot easier to take a look under the covers of the abstractions we'll use once we know what can be achieved with such. We'll automatically come up with questions about certain results and behaviors and develop an own intuition and excitement to understand how the results came to be.

In doing this we'll take the great ["Practical Deep Learning for Coders"](https://course.fast.ai/) course by the [Fast.ai](https://fast.ai/) team which will walk us through many real-world examples of Deep Neural Network usage. Theoretical concepts aren't completely left out but will be discussed "just-in-time".

It's important to emphasize that it's totally fine (and expected) that we won't understand everything which is taught during this course the first time we hear about it. Most of the topics will be covered multiple times throughout this Curriculum so we'll definitely get the hang of it later on. If you're having problems with one topic or the other, feel free to rewatch the respective part in the video or do some research on your own. Keep in mind though that you shouldn't get too deep into the weeds since our main focus is still on the practical portions.

You should definitely recreate each and every single [Jupyter Notebook](https://jupyter.org/) which was used in the [Fast.ai](https://fast.ai/) course from scratch. This helps you to get a better understanding of the workflow and lets you play around with the parameters to see the effects they have on the data.

When done it's a good idea to watch the following [great talk by Google](https://www.youtube.com/watch?v=vq2nnJ4g6N0) and this [mini-course by Leo Isikdogan](https://www.youtube.com/playlist?list=PLWKotBjTDoLj3rXBL-nEIPRN9V3a9Cx07) to solidify the knowledge we've just acquired.

#### Resources

- [Fast.ai - Practical Deep Learning for Coders](https://course.fast.ai/)
- [Learn TensorFlow and Deep Learning without a Ph.D.](https://cloud.google.com/blog/products/gcp/learn-tensorflow-and-deep-learning-without-a-phd)
- [Leo Isikdogan - Deep Learning Crash Course](https://www.youtube.com/playlist?list=PLWKotBjTDoLj3rXBL-nEIPRN9V3a9Cx07)

### 2. Mathematical Foundations

Once we have a good understanding of what Deep Learning is, how it's used in practice and how it roughly works under the hood it's time to take a step back and refresh our Math knowledge. Deep Neural Networks heavily utilize Matrix multiplications, non-linearities and optimization algorithms such as [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent). We therefore need to familiarize ourselves with [Linear Algebra](https://en.wikipedia.org/wiki/Linear_algebra), [Calculus](https://en.wikipedia.org/wiki/Calculus) and some basic [Probability Theory](https://en.wikipedia.org/wiki/Probability) which build the Mathematical foundations of Deep Learning.

While this is certainly advanced Mathematics it's important to highlight that High School level Math knowledge is usually enough to get by in the beginnings. For the most part we should just refresh our knowledge a little bit. It's definitely not advisable to spent weeks or even months studying every aspect of Linear Algebra, Calculus or Probability Theory (if that's even possible) to consider this part "done". Basic fluency in the aforementioned topics is enough. There's always enough time to learn the more advanced topics as soon as we come across them.

Having a good Mathematical understanding will pay dividends later on as we progress with more advanced Deep Learning topics. Don't be intimidated by this part of the Curriculum. Mathematics can and should be fun!

Stanford has some great refreshers on [Linear Algebra](http://cs229.stanford.edu/section/cs229-linalg.pdf) and [Probability Theory](http://cs229.stanford.edu/section/cs229-prob.pdf). If that's too shallow and you need a little bit more to get up to speed you might find Part 1 of the [Deep Learning Book](https://www.deeplearningbook.org/) helpful.

Once you've brushed up the basics it's worthwhile to take a couple of days and thoroughly study ["The Matrix Calculus You Need For Deep Learning"](https://arxiv.org/pdf/1802.01528.pdf) by Terence Parr and Jeremy Howard (one of the founders of [Fast.ai](https://fast.ai/)) and the ["Computational Linear Algebra"](https://github.com/fastai/numerical-linear-algebra) course by Rachel Thomas (also a co-founder of [Fast.ai](https://fast.ai/)). Both resources are heavily tailored to teach the Math behind Deep Learning.

#### Resources

- [Stanford CS229 - Linear Algebra Refresher](http://cs229.stanford.edu/section/cs229-linalg.pdf)
- [Stanford CS229 - Probability Theory Refresher](http://cs229.stanford.edu/section/cs229-prob.pdf)
- [Deep Learning Book - Part I](https://www.deeplearningbook.org/)
- [Terence Parr, Jeremy Howard - The Matrix Calculus You Need For Deep Learning](https://arxiv.org/pdf/1802.01528.pdf)
- [Rachel Thomas - Computational Linear Algebra](https://github.com/fastai/numerical-linear-algebra)

### 3. Deep Dive

Now we're armed with a good understanding of the capabilities and the underlying Math of Deep Learning.

Given this it's time to take a deep dive to broaden our knowledge of Deep Learning. The main goal of this part is to take the practical experience and blend it with our Mathematical exposure to fully understand the theoretical building blocks of Deep Neural Networks. A thorough understanding of this will be key later on once we learn more about topics such as Deep Reinforcement Learning.

The following describes 3 different ways to take the deep dive. The approaches are certainly not mutually exclusive but could (and should) be used in conjunction to complement each other.

The path you might want to take will depend on your prior exposure to Deep Learning and you favorite learning style.

If you're a person who appreciates classical MOOCs in the form of high-quality, pre-recorded videos with quizzes and exercises you'll definitely enjoy [Andrew Ng's](https://www.andrewng.org/)[Deeplearning.ai "Specialization for Deep Learning"](https://www.deeplearning.ai/deep-learning-specialization/). This course is basically split up into 5 different sub-courses which will take you from the basics of Neural Networks to advanced topics such as as [Recurrent Neural Networks](https://en.wikipedia.org/wiki/Recurrent_neural_network). While learning about all of this you'll also pick up a lot of valuable nuggets Andrew shares as he talks about his prior experience as a Deep Learning practitioner.

You can certainly get around the tuition fee for the [Deeplearning.ai](https://www.deeplearning.ai/)specialization, but it's important to emphasize that it's definitely worth every penny! You'll have access to high quality course content, can request help when you're stuck and get project reviews by classmates and experts.

Readers who enjoy books should definitely look into the ["Dive into Deep Learning" book](http://d2l.ai/). This book was created to be a companion guide for the [STAT 157 course](https://courses.d2l.ai/) at [UC Berkeley](https://www.berkeley.edu/) but turned into more than that. The main focus of this book is to be at the intersection of Mathematical formulations, real world applications and the intuition behind Deep Learning complemented by [interactive Jupyter Notebooks](https://github.com/d2l-ai/notebooks) to play around with. "Dive into Deep Learning" covers all of the important concepts of a modern Deep Learning class. It requires no prior knowledge and starts with the basics of Neural Networks while moving onwards to cover advanced topics such as [Convolutional Neural Networks](https://en.wikipedia.org/wiki/Convolutional_neural_network), ending in discussions about state-of-the-art [NLP](https://en.wikipedia.org/wiki/Natural_language_processing) implementations.

Another method to study Deep Learning in great detail is with the help of recorded university class videos. [MIT](http://www.mit.edu/) released the terrific ["Introduction to Deep Learning" course](http://introtodeeplearning.com/) which is basically a recording of their 6.S191 class accessible for everyone to watch! This option is definitely one of the more advanced ways to learn the subject as some prior university-level Math and Computer Science knowledge is necessary to grok it. The huge benefit of this format is that it touches on a lot of different topics other courses simply don't cover due to missing prerequisites. If you've already been exposed to university-level Computer Science and Mathematics and like to learn with a focus on more rigor theory, then this course is definitely for you.

Whatever route you take, it's really important that you take your time to revisit concepts and recreate their implementations from scratch. It's totally fine if you're struggling at first. It's this wandering through the dark alleys where you'll actually learn the most! Don't waste your time passively consuming content. Go out and reproduce what you've just learned!

At the end of the day it doesn't really matter what format you choose. All courses will equally well prepare you for the next step in your journey to Deep Learning mastery which is your first Capstone project!

#### Resources

- [Deeplearning.ai - Deep Learning Specialization)](https://www.deeplearning.ai/)
- [UC Berkeley - Dive into Deep Learning](http://d2l.ai/)
- [MIT - Introduction to Deep Learning](http://introtodeeplearning.com/)

### 4. Capstone Project I

**Focus:** Supervised Deep Learning

Enough theory (for now). It's time to put our hard earned knowledge to practice.

In our first Capstone project we'll demonstrate that we fully understand the basic building blocks of modern Deep Learning. We'll pick a problem of interest and solve it with the help of a Deep Neural Network. Since we've mostly dealt with [Supervised Learning](https://en.wikipedia.org/wiki/Supervised_learning) so far it's worth mentioning that our solution will be based on such an implementation.

Our programmatic environment will be a separate [Jupyter Notebook](https://jupyter.org/) where we code and describe every step together with a brief justification of its necessity in great detail. Taking the time to think through the steps necessary to solve our problem helps us check ourselves as we have to think through our architecture as well as the underlying processes that take place when our code is executed.

To further deepen our knowledge and help us get out of the comfort zone we'll restrict our implementation to the usage of low-level Frameworks, meaning that we're only allowed to use Frameworks such as [PyTorch](https://pytorch.org/), [TensorFlow](https://www.tensorflow.org/) or [MXNet](https://mxnet.apache.org/). Any usage of high-level abstraction libraries such as [Fastai](https://docs.fast.ai/) or [Keras](https://keras.io/) is **strictly forbidden**. Those libraries, while being great for the experienced practitioner, abstract too much away, hindering us to go through the tough decisions and tradeoffs we have to make when working on our problem.

Remember that this is the part where we'll learn the most as we're really getting into the weeds here. Don't give up as enlightenment will find you once you made it. It's also more than ok to go back and reread / rewatch the course material if you're having problems and need some help.

While working on this project always keep in mind that it's one of your personal portfolio projects you should definitely share online. It's those projects where you can demonstrate that you're capable to solve complex problems with Deep Learning technologies. Make sure that you really spend a good portion of your time on it and "make it pretty".

Are you struggling to find a good project to work on? Here are some project ideas which will help you get started:

- [Hand written digit recognition](http://yann.lecun.com/exdb/mnist/)
- [Semantic Segmentation](http://mi.eng.cam.ac.uk/research/projects/VideoRec/CamVid/)
- [Sentiment Analysis](http://ai.stanford.edu/~amaas/data/sentiment/)
- [Natural Language Processing](http://u.cs.biu.ac.il/~koppel/BlogCorpus.htm)

### 5. Deep Reinforcement Learning

Deep Reinforcement Learning is the last major topic we'll cover in this Curriculum.

One might ask the question as to what the difference between the Deep Learning we're studying and Deep Reinforcement Learning is. All the techniques we've learned and used so far were built around the concept of [Supervised Learning](https://en.wikipedia.org/wiki/Supervised_learning). The gist of Supervised Learning is that we utilize large datasets to train our model by showing it data, letting it make predictions about what it thinks the data represents and then using the labeled solution to compute the difference between the prediction and the actual solution. We then use algorithms such as [Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent) and [Backpropagation](https://en.wikipedia.org/wiki/Backpropagation) to subsequently readjust our model until the predictions it makes meet our expectations.

You might've already noticed that Supervised Learning heavily relies on huge datasets to train and test our models via examples.

What if there's a way that our AI can teach itself what it should do based on self-exploration and guidelines we define? That's where [Reinforcement Learning](https://en.wikipedia.org/wiki/Reinforcement_learning)comes into play. With Reinforcement Learning we're able to let our model learn from first principles by exploring the environment. The researches at [DeepMind](https://deepmind.com/)were one of the first who successfully [blended Deep Learning and Reinforcement Learning](https://arxiv.org/pdf/1312.5602v1.pdf) to let an AI teach itself to [play Atari games](https://www.youtube.com/watch?v=eG1Ed8PTJ18). The only inputs the AI agent got were the raw input pixels and the score.

In this part of our Curriculum we'll learn what Reinforcement Learning is and how we can combine Deep Learning and Reinforcement Learning to build machine intelligence which learns to master tasks in an autodidactic way.

As per usual there are different ways to learn Deep Reinforcement Learning.

[Thomas Simonini](https://www.simoninithomas.com/) has a great ["Deep Reinforcement Learning Course"](https://simoninithomas.github.io/Deep_reinforcement_learning_Course/) which focuses on the practical pieces of Deep Reinforcement Learning as you'll implement real world applications throughout his class.

[OpenAIs "SpinningUp AI"](https://spinningup.openai.com/en/latest/) course is another great resource which strikes a really good balance between practical examples and theoretical foundations.

If you're looking for a University-level class which heavily focuses on the theoretical underlying I'd highly recommend the ["Advanced Deep Learning and Reinforcement Learning Class"](https://github.com/enggen/DeepMind-Advanced-Deep-Learning-and-Reinforcement-Learning) which was taught by [UCL](https://www.ucl.ac.uk/) and [DeepMind](https://deepmind.com/).

Every resource listed here will help you understand and apply Deep Reinforcement Learning techniques. While some are more focused on the practical portions others go really deep into the trenches of theoretical rigor. It's definitely worthwhile to look into all of them to get the all-around view and best mixture between theory and practice.

Once you successfully made your way through one of the Deep Reinforcement Learning courses it's a good idea to revisit the key ideas by reading the excellent blog posts ["Deep Reinforcement Learning: Pong from Pixels"](http://karpathy.github.io/2016/05/31/rl/) by [Andrej Karpathy](https://cs.stanford.edu/people/karpathy/)and ["A (Long) Peek into Reinforcement Learning"](https://lilianweng.github.io/lil-log/2018/02/19/a-long-peek-into-reinforcement-learning.html) by [Lilian Weng](https://twitter.com/lilianweng/) as they give a nice, broader overview of the different topics which were covered during class.

**Aside:** If you're fascinated by the possibilities of Reinforcement Learning I'd highly recommend the book ["Reinforcement Learning: An Introduction"](http://www.incompleteideas.net/book/the-book-2nd.html) by Richard Sutton and Andrew Barto. The recently updated 2nd edition includes chapters about Neuroscience, Deep Neural Networks and more. While it's possible and desirable to buy the book at your local bookstore you can also access the book as a freely available PDF online.

#### Resources

- [Thomas Simonini - Deep Reinforcement Learning Course](https://simoninithomas.github.io/Deep_reinforcement_learning_Course/)
- [OpenAI - SpinningUp AI Course](https://spinningup.openai.com/en/latest/)
- [OpenAI - SpinningUp AI Talk](https://www.youtube.com/watch?v=fdY7dt3ijgY)
- [Advanced Deep Learning and Reinforcement Learning 2018 Course (UCL & DeepMind)](https://github.com/enggen/DeepMind-Advanced-Deep-Learning-and-Reinforcement-Learning)
- [Advanced Deep Learning and Reinforcement Learning 2018 Assignments](https://github.com/lebourbon/ADL_RL)
- [Richard Sutton, Andrew Barto - Reinforcement Learning: An Introduction](http://www.incompleteideas.net/book/the-book-2nd.html)

### 6. Capstone Project II

**Focus:** Deep Reinforcement Learning

It's time for our second and last Capstone Project where we'll use Deep Reinforcement Learning to let our AI teach itself to solve difficult real-world problems.

The same restrictions from our first Capstone project also apply here. We'll implement the solution in a dedicated [Jupyter Notebook](https://jupyter.org/) where we write our code and the prose to describe what we're doing and why we're doing it. This helps us test our knowledge since we have to take the time to think through our current implementation and its implications to the system as a whole.

As with the Capstone I project **it's forbidden** to use higher level abstraction libraries such as [Fastai](https://docs.fast.ai/) or [Keras](https://keras.io/). Our implementation here should only use APIs provided by lower-level Frameworks such as [PyToch](https://pytorch.org/), [TensorFlow](https://www.tensorflow.org/) or [MXNet](https://mxnet.apache.org/).

Keep in mind that it's totally fine to feel stuck at some point. Don't be discouraged! Take your time to revisit the material and ensure that you fill your knowledge gaps before moving on. It's those moments of struggle where you grow the most. Once you've made it, you'll feel excited and empowered.

The result of this Capstone project is another crucial piece of your personal Deep Learning portfolio. Make sure to set aside enough time to be able to put in the effort so that you can showcase your implementation online.

Do you need some inspiration for projects you might want to work on? Here's a list with some ideas:

- [OpenAI Gym Exercises](https://gym.openai.com/)
- [Connect Four Game Agent](https://en.wikipedia.org/wiki/Connect_Four)
- [Frogger Game Agent](https://en.wikipedia.org/wiki/Frogger)

## Conclusion

Deep Learning has gained a lot of traction in last couple of years as major scientific breakthroughs made it finally possible to train and utilize Deep Neural Networks to perform tasks at human expert level ranging from cancer detection to mastery in games such as Go or Space Invaders.

In this blog post I shared the Curriculum I follow to learn Deep Learning from scratch. Right in the beginning of the journey one learns how Deep Learning techniques are used in practice to solve real-world problems. Once a baseline understanding is established it's time to take a deep dive into the Mathematical and theoretical pieces to demystify the Deep Learning "Black Box". A final exploration of the intersection of Deep Learning and Reinforcement Learning puts the reader in a great position to understand state-of-the art Deep Learning solutions. Throughout the whole Curriculum we'll practice our skills and showcase our fluency in such while working on dedicated Capstone projects.

While putting this together I had the feeling that this Curriculum can look quite intimidating at first glance since lots of topics are covered and it'll definitely take some time to get through it. While I'd advise the avid reader to follow every single step in the outlined order it's totally possible to adapt and skip some topics given that everyone has different experiences, goals and interests. Learning Deep Learning should be fun and exciting. If you ever feel exhausted or struggle to get through a certain topic you should take a step back and revisit it later on. Oftentimes complicated facts and figures turn into no-brainers if we give ourselves the permission and time to do something else for the moment.

I personally believe that it's important to follow a goal while learning a new topic or skill. Make sure that you know **why** you want to learn Deep Learning. Do you want to solve a problem at your company? Are you planning to switch careers? Is a high level overview enough for you since you just want to be educated about AI and its social impacts? Whatever it is, keep this goal in mind as it'll make everything reasonable and easier during the hard times when the motivation might be lacking and everything just feels too hard to pick up.

I hope that you enjoyed this article and I'd like to invite you to [subscribe](/subscribe) to my Newsletter if you're interested in more posts like this.

Do you have any questions, feedback or comments? Feel free to reach out via E-Mail or connect with me on [Twitter](https://twitter.com/pmmuens).
