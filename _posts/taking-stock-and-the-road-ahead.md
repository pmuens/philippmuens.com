---
title: Taking stock and the road ahead
description: What I learned during the first half of 2020 while studying Machine Learning and Homomorphic Encryption.
coverImage: /assets/blog/taking-stock-and-the-road-ahead/cover.jpg
date: '2020-09-15T18:28:18.000Z'
author:
  name: Philipp Muens
  website: https://philippmuens.com
  picture: /assets/blog/authors/philipp.jpg
ogImage:
  url: /assets/blog/taking-stock-and-the-road-ahead/cover.jpg
---

Earlier this year I wrote an [in-depth blog post](/the-next-chapter/) in which I explored what topics I'll be focusing on in 2020. In order to hold myself accountable I turned that post into a roadmap I followed closely. The overarching theme was Machine Learning and understanding all of the foundational algorithms by implementing them from scratch in pure Python.

It's been half a year since I started to work on that endeavor and I believe now is a good time to take stock of the status quo and plan the upcoming months and years.

## Goal 1: Implementing Machine Learning algorithms from scratch

The last 6 months I spent a good portion of my time diving deep into fundamental Machine Learning algorithms such as [Gradient Descent](/gradient-descent-from-scratch/), [Naive Bayes](/naive-bayes-from-scratch/) and [Logistic Regression](/logistic-regression-from-scratch/). To get the most out of this learning experience I implemented all the algorithms from scratch and shared my learnings via code examples on [GitHub](https://github.com/pmuens/lab#x-from-scratch) and dedicated in-depth blog post I published on this blog.

Overall I'm pretty happy with the outcome and can say that doing this was totally worth it. I wholeheartedly enjoyed the process from knowing next to nothing about the topic at hand to learning the underlying mathematics and implementing a fully working prototype solely based on reading through a bunch of books, Wikipedia articles and whitepapers.

Unfortunately the whole "Machine Learning from scratch" series isn't 100% done just yet. What's missing is a blog post about [k-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) and [Neural Networks](https://en.wikipedia.org/wiki/Neural_network). The code has already been written and can be found [here](https://github.com/pmuens/lab/blob/master/x-from-scratch/k-means-clustering-from-scratch.ipynb) and [here](https://github.com/pmuens/lab/blob/master/x-from-scratch/neural-networks-from-scratch.ipynb). I hope that I'll find some time and energy to write and publish the remaining 2 blog posts anytime soon.

## Goal 2: Learning and applying Homomorphic Encryption

Another goal I followed was to learn more about secure computation and [Homomorphic Encryption](https://en.wikipedia.org/wiki/Homomorphic_encryption) in particular. The main objective was to explore ways in which Homomorphic Encryption and Machine Learning can be used together. Using both in conjunction could resolves fundamental issues around privacy and would unlock new, important use cases where Machine Learning is currently not applicable due to regulatory restrictions. One important solution which comes to mind is using Deep Neural Networks in the healthcare sector where preserving the patients privacy is of upmost importance.

In order to fully understand Homomorphic Encryption from a theoretical and practical point of view I took the same approach I did to master Machine Learning algorithms. I read dozens and dozens of whitepapers, watched countless conference talks and followed the community closely to implement the foundational algorithms from scratch in pure Python. It was a wild and oftentimes frustrating ride. Cryptography is hard but one of the most intellectually stimulating topics anyone interested in Mathematics and Computer Science should study!

The main outcomes of this exercise were implementations of some of the most important Homomorphic Encryption algorithms to date:

- [On Lattices, Learning with Errors, Random Linear Codes, and Cryptography](https://github.com/pmuens/lab/blob/master/cryptography/lwe-reg05.ipynb)
- [On Ideal Lattices and Learning with Errors Over Rings](https://github.com/pmuens/lab/blob/master/cryptography/rlwe-lpr10.ipynb)
- [Faster Bootstrapping with Polynomial Error](https://github.com/pmuens/lab/blob/master/cryptography/he-ap14.ipynb)
- [Fully Homomorphic Encryption without Modulus Switching from Classical GapSVP](https://github.com/pmuens/pybra12)
- [Somewhat Practical Fully Homomorphic Encryption](https://github.com/pmuens/pyfv12)

Don't be intimidated by the titles! I strongly believe that Homomorphic Encryption is a fascinating topic anyone can understand and master.

There are a couple of IMHO unnecessary roadblocks you might encounter when digging deeper into the subject. You won't believe how often research paper lack important information which makes it hard or nearly impossible to reproduce their results. Let me know if you decide to learn more about Homomorphic Encryption and need some pointers or guidance along the way.

## Project "Interlayer" - Putting Machine Learning into practice

Learning and studying new topics and concepts in a theoretical setting can be enjoyable but putting the theory into practice is where the magic of understanding happens!

That's why I decided to scratch one of my own itches by implementing a Machine Learning powered recommender system. The main idea is to help users discover new, useful content on the internet. I called the project "[Interlayer](https://interlayer.io)" given that it would act as a kind of connecting layer between all the different web properties on the internet.

Roughly speaking Interlayer crawls and analyzes websites while generating topics the website in question covers. Such topics are then used to find similar / complementary websites the current visitor might find useful. Under the hood it uses techniques such as [Word Embeddings](/word2vec-intuition/) and [K-nearest neighbors](/k-nearest-neighbors-from-scratch/).

It took approximately 1 month to implement the first "alpha" version which was focused on online blogs. After hearing about the struggles ecommerce merchants face to get initial traffic to their stores I decided to change course and update Interlayer to work better with ecommerce stores. The result of this is the [Interlayer Shopify App](https://interlayer.io/traffic-exchange/shopify/) I launched a couple of weeks ago.

I'll spend more time to dive deeper into the project and explain what I learned from a technical as well as business point of view. As it turns out running a Machine Learning pipeline in production at scale isn't a straightforward undertaking.

## What's next

Over the last 6 months I learned a ton! Starting with Machine Learning algorithms I followed-up with implementations of core Homomorphic Encryption algorithms to finally put everything I learned into practice and ship my first product called "[Interlayer](https://interlayer.io)".

What I quickly figured was that while I truly love the challenge of learning and implementing algorithms from scratch it's hard for me to find the time and energy to write in-depth blog posts once I'm done with the coding part. What I truly enjoy is learning the ins- and outs of new technologies and applying such learnings in practice by building real customer-facing products. Working on [Interlayer](https://interlayer.io) was an eye-opening experience as merchants all over the world started to install the app and refer traffic to each other. All of this is powered by Machine Learning algorithms I started to study earlier this year.

Over the last couple of weeks I took some time to reflected more on that experience. Seeing a project being used "in production" sparked an interest in the Bootstrapping and Indie Hacking community in me.

## The road ahead

Given what I've learned over the last 6 months I plan to make this whole blog a lot more personal. While I'll continue to publish long-form educational content and essays I'll switch the main focus on the "making" side of things.

Essentially I'll start to "document rather than create". A lot of content never saw the light of day due to the artificial "it has to be article-worthy" filter I used to determine what's worth sharing. I strongly believe that it's helpful to learn in public. In fact there's a lot I learned from others this way!

I hope that you enjoyed this article and I'd like to invite you to [subscribe](/subscribe) to my Newsletter if you're interested in more posts like this.

Do you have any questions, feedback or comments? Feel free to reach out via E-Mail or connect with me on [Twitter](https://twitter.com/pmmuens).
