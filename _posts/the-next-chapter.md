---
title: The Next Chapter
description: Artificial Intelligence slowly but surely takes over our daily lives. Let's peek under the covers to learn how it works and ensure that it's used for good.
coverImage: /assets/blog/the-next-chapter/cover.jpg
date: '2020-02-28T15:05:27.000Z'
hidden: false
author:
  name: Philipp Muens
  website: https://philippmuens.com
  picture: /assets/blog/authors/philipp.jpg
ogImage:
  url: /assets/blog/the-next-chapter/cover.jpg
---

The end of the year is usually a good time to reflect on the past year, think about the present and plan for the future. I personally do this every year as it helps me reevaluate my goals and get everything in alignment with what's ahead.

The end of last year felt slightly different, however as we left the "old" decade behind and entered the new one: **2020**.

A decade sounds shorter than it actually is. In order to get some perspective as to what can happen in 10 years of time I did some research, tracking down where we started technology-wise when entering 2010:

Did you know that Uber, the infamous ride hailing startup was just getting started and was barely a thing in 2010? That Snapchat was merely an idea until the first release hit the Apple AppStore in 2011? Or that our text-based communication was mostly done via SMS as only early adopters owned a Smartphone. Just a few people used WhatsApp, the then paid communication platform which was started in 2009 and took the world by storm, eventually replacing texting via SMS.

All of that happened in between 2010 and 2020. 10 years is a long time. A lot can change in a decade.

## Rapid Innovation

We're living in extremely exciting times as mankind has never seen technological advancements at such a rapid pace. One area I'm extremely excited about is Machine Learning and its impact on computing and society. While I certainly had some theoretical encounters during college, my interest in AI rekindled when I read about the breathtaking breakthroughs we've achieved in areas such as [self-driving](https://www.tesla.com/autopilot)[cars](https://waymo.com), [game](https://deepmind.com/research/case-studies/alphago-the-story-so-far)[AIs](https://deepmind.com/blog/article/alphastar-mastering-real-time-strategy-game-starcraft-ii) or the [life](https://www.nature.com/articles/s41598-019-48995-4)[sciences](https://deepmind.com/blog/article/AlphaFold-Using-AI-for-scientific-discovery).

Such breakthroughs mostly happened in the last decade. One can only imagine what else will be unlocked if we follow the current trajectory of research efforts and hardware / software innovation.

## The Next Chapter

While reflecting on the last 10 years I decided to pick a grand theme I want to focus my efforts on in the upcoming years. As my background is in [Open Source](https://github.com/serverless/serverless) software and [Cloud computing](https://serverless.com) and my passion lies in Computer Science and Math I decided to phrase such theme as:

> **The intersection of Computer Science, Mathematics and Distributed Computing**

The next years I'll dedicate my time to the field of Machine Learning. To further narrow this down my plan is to focus on the "bleeding edge" which will include research and development efforts on various fronts. The core idea is to study brand new, theoretical research and put it into practice, hence the name of this publication: **The Intersection**.

There's a lot to discover during this process and together we'll deconstruct our findings in order to better understand their underlying guiding principles and mathematical foundations. Furthermore we'll apply what we've learned while working on different projects ranging from toy projects to PoCs to custom-tailored Machine Learning toolings.

Since "sharing is caring" I'll document the whole journey via blog posts and Open Source the code I'll produce on my [GitHub](https://github.com/pmuens) account.

## The Plan

Every adventure should have a sound plan, so here's what's on my mind right now. While I've already describe the guiding "North Star" in the section above I decided to further split up the endeavor into different categories. Every blog post I'll write will be tagged with respective categorical tags.

### Algorithms / Machine Learning

The focus of this category is on the exploration and explanation of different Machine Learning algorithms and techniques. We'll peek under the covers and deconstruct how modern Machine Learning really works. Open Sourced code implementations will demonstrate the usefulness of models such as [Linear Regression](https://en.wikipedia.org/wiki/Linear_regression), [Latent Dirichlet Allocation (LDA)](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation) or [Capsule Neural Networks](https://en.wikipedia.org/wiki/Capsule_neural_network).

### Mathematics

Pretty much all Machine Learning algorithms require a deep understanding of advanced Mathematical concepts. Given such requirement most people shy away since "math is too complicated" or "just not for me".

I thought exactly the same but decided to put a fork in the road. Earlier last year [I created a colloquium](/learning-advanced-mathematics/) which I followed to relearned advanced mathematics from scratch. I can tell you that it's definitely challenging but at the same time intellectually stimulating and really rewarding. Trust me when I say that Math is a beautiful language and absolutely worthwhile to study.

The Math category will be used to translate complicated looking concepts into easily digestible prose and code.

### Research / Bleeding Edge

It's of upmost importance to stay on top of the current research. During our journey through the lands of Machine Learning and Artificial Intelligence I plan to allocate time to read about recent developments and share my findings via dedicated research-oriented posts.

Since research goes both ways I'll also take some time to do some research on my own, extending and discussing existing ideas while also coming up with new ones.

### Projects / Code

Staying too long in the theoretical realm is boring. Applying the theory in practice is where the fun begins and the real learning happens!

The "Projects" and "Code" categories will be used to talk about the projects we'll work on while bridging the gap between science and engineering. Projects can range from specifications, PoCs, implementation proposals to fully-fledged applications.

I already have a long list of ideas I plan to work on and I'll present some of those in upcoming posts.

As per usual I plan to Open Source the code while working on the projects and I'd be more than happy to welcome you joining the fun on GitHub.

## What's next?

Over the last couple of weeks I've already started to work according to the plan I just described above.

A solid foundational knowledge about the core concepts and principles is key to succeed in any field of study. That's why I started the challenge of implementing core Machine Learning algorithms from scratch in pure Python with literally 0 dependencies (except for plotting graphs and diagrams). Some of such algorithms include [Gradient descent](https://en.wikipedia.org/wiki/Gradient_descent), [k-NN](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm), [Linear- and Multiple Linear Regression](https://en.wikipedia.org/wiki/Linear_regression), [Logistic Regression](https://en.wikipedia.org/wiki/Logistic_regression), [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier), [Decision Trees](https://en.wikipedia.org/wiki/Decision_tree), [Neural Networks](https://en.wikipedia.org/wiki/Artificial_neural_network) and more. Most of them are already translated into blog posts which explain the algorithm in an intuitive and fun way. I plan to release the first blog posts in the upcoming weeks.

Other than that I'm fascinated by the idea and technological challenges of privacy preserving Machine Learning. There's the saying that "Data is the new oil" since it's used among other things to train the Machine Learning algorithms that drive our daily lives. But data is more than "just modern oil". Data is precious, sensitive and shouldn't be shared or used without a users consent. Techniques such as [Homomorphic Encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption), [Secure multi-party computation](https://en.wikipedia.org/wiki/Secure_multi-party_computation), [Differential Privacy](https://en.wikipedia.org/wiki/Differential_privacy) and [Federated Learning](https://en.wikipedia.org/wiki/Federated_learning) can be used to solve the privacy issue and e.g. train encrypted Machine Learning models on encrypted data in untrusted environments. I've already started to look into current research efforts and implemented different Homomorphic Encryption schemes to get an idea of what can work and what's still practically infeasible. While doing so I was blown away by the capabilities we might unlock in the next couple of years. It was really hard to pull myself out of that rabbit hole. To share my enthusiasm and get you excited as well I'm currently in the process of preparing some deep dive blog post series around those topics!

## Conclusion

10 years ago self-driving cars and personal assistants were merely far fetched dreams and only really appreciated by SciFi fans and futurology nerds. Nowadays those technologies are omnipresent thanks to rapid innovations in areas such as Artificial Intelligence, Neuroscience, Distributed Computing and Hardware / Software development.

There's no better time than now to get involved in Machine Learning. That's why I decided to fully immerse myself into the field. I'll use this blog to document the journey while we learn about bleeding edge research, turn algorithms into code and work on various projects while decoding the underpinnings of the intelligent technologies which drive our daily lives.

I hope that you enjoyed this article and I'd like to invite you to [subscribe](/subscribe) to my Newsletter if you're interested in more posts like this.

Do you have any questions, feedback or comments? Feel free to reach out via E-Mail or connect with me on [Twitter](https://twitter.com/pmmuens).
