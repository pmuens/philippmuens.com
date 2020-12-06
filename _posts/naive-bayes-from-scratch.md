---
title: Naive Bayes from scratch
description: Learn how to implement your own spam filter with the help of Bayes Theorem.
coverImage: /assets/blog/naive-bayes-from-scratch/cover.jpg
date: '2020-04-09T13:49:15.000Z'
author:
  name: Philipp Muens
  website: https://philippmuens.com
  picture: /assets/blog/authors/philipp.jpg
ogImage:
  url: /assets/blog/naive-bayes-from-scratch/cover.jpg
---

You can find working code examples (including this one) in my [lab repository](https://github.com/pmuens/lab) on [GitHub](https://github.com/pmuens).

How do you implement a spam filter that adapts to the ever evolving techniques of modern spammers? Spam detection is a classification problem as you have to decide whether a message is spam or not. However there's always some uncertainty involved in figuring out if the message at hand might contain spam or not.

Looking into the probability toolbox to tame such uncertainty one might stumble upon the infamous [Bayes Theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem) which is exactly what we'll use in this post to build a basic spam filter.  Using Bayes Theorem we'll implement an algorithm called [Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) which was used in the early internet days as a spam filtering technique. Let's dive in!

**Note**: This post assumes a certain level of knowledge about probability theory. If you're new to this subject or just a little bit rusty you might want to check out the "[Basics of Probability](https://www.youtube.com/playlist?list=PLvxOuBpazmsOGOursPoofaHyz_1NpxbhA)" playlist by [JB Statistics ](https://www.jbstatistics.com)which helps you in building the intuitions behind probability theory.

## Bayes Theorem

if you've studied statistics and probability theory in the past you surely came across [Bayes Theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem) which lets you calculate conditional probabilities. [Conditional probabilities](https://en.wikipedia.org/wiki/Conditional_probability) are probabilities with dependencies which can be used to mathematically express questions such as: "What's the probability that it'll be sunny throughout the day given that we saw clouds in the morning?". Translating this sentence into math results in the following:

$$
P(Sun \mid Clouds)
$$

Having some decent meteorology data available should be sufficient to calculate the exact probability via Bayes Theorem which is formulated as follows:

$$
P(A \mid B) = \frac{P(B \mid A) \, P(A)}{P(B)}
$$

Let's take a quick refresher and apply this formula by working through an example step by step. Assuming that we're living in a place where it's often cloudy, the chance to see clouds in the morning is roughly $60\%$. At the same time most days aren't that sunny. Only 7 out of 30 days can be considered really sunny. Another data point we have is that $50\%$ of the sunny days started out with clouds in the morning.

Formulating these findings as probabilities results in the following:

$$
P(Sun) \approx 25\% \approx 0.25
$$

$$
P(Cloud) = 60\% = 0.6
$$

$$
P(Cloud \mid Sun) = 50\% = 0.5
$$

Calculating the likelihood of getting a sunny day even when we saw clouds in the morning is as simple as plugging-in the probabilities into Bayes Theorem:

$$
P(Sun \mid Cloud) = \frac{P(Cloud \mid Sun) \, P(Sun)}{P(Cloud)} \\ = \frac{0,5 \times 0,25}{0,6} \approx 0,21 = 21\%
$$

So there's a $21\%$ chance that we get a sunny day even if the morning started with clouds.

## From Bayes Theorem to Naive Bayes

Now that we got a quick refresher on Bayes Theorem it's time to ask ourselves how we could apply this formula to a classification problem such as spam filtering.

Generally speaking we'd like to calculate the probability that any given message is spam. If the probability exceeds a certain threshold (e.g. $50\%$) we classify it as spam. Otherwise we believe that the message is legit and call it "ham".

_The rather unusual word "ham" which describes "non spam" messages is used throughout literature so we'll use it here too._

### Bayes Theorem and spammy words

Breaking the problem further down into it's fundamentals we can say that a message is comprised of different words, so why don't we start there and calculate the probability of a message being classified as spam given that it contains a certain "trigger" word.

Let's assume that we're working with the word "prize" and want to figure out what the probability is that a given message which contains the word "prize" is spam. Formulating this problem via Bayes Theorem results in:

$$
P(Spam \mid Prize) = \frac{P(Prize \mid Spam) \, P(Spam)}{P(Prize)}
$$

To make things clear, here's the formula translated into prose:

> "The probability of a message being spam given that we see the word "Prize" in it is the probability of finding the word "Prize" in our already seen spam messages times the probability of the message in question being spam divided by the probability of finding the word "Prize" in any of our already seen messages."

There are two simplifications we can apply here. The first thing we might want to do is expand the denominator like so:

$$
P(Prize) = P(Prize \mid Spam) P(Spam) + P(Prize \mid Ham) P(Ham)
$$

We simply rewrote the condensed version of $P(Prize$ into a more verbose statement listing all its underlying probabilities.

Our expanded Bayes Theorem application now looks like the following:

$$
P(Spam \mid Prize) = \frac{P(Prize \mid Spam) P(Spam)}{P(Prize \mid Spam) P(Spam) + P(Prize \mid Ham) P(Ham)}
$$

The neat thing about this expansion is that we can now apply our second trick. Let's think about the probability of a message being spam vs. a message being ham for a minute. What is the likelihood that any random message is spam? What is the likelihood that it's ham? The fact is that we don't know for sure so we might just assume that there's a $50/50$ chance that any random, incoming message is spam or ham.

Applying this finding by plugging-in the corresponding probabilities results in:

$$
P(Spam \mid Prize) = \frac{P(Prize \mid Spam) 0.5}{P(Prize \mid Spam) 0.5 + P(Prize \mid Ham) 0.5}
$$

That's great because now we can apply basic arithmetic and cancel out these probabilities, resulting in our final formulation to determine whether a message containing the word "Prize" should be considered "spammy".

$$
P(Spam \mid Prize) = \frac{P(Prize \mid Spam)}{P(Prize \mid Spam) + P(Prize \mid Ham)}
$$

### Scaling it up to whole sentences

Now that we know how to calculate the probability for a single word we should try to scale it up so that we can compute the probabilities for whole sentences.

A naive approach would be to insert the whole message as the conditional probability part. However that won't work as it would force our algorithm to essentially look for duplicate messages.

Thinking logically we can observe that a sentence is simply a succession of single words. What we could do is reuse what we did above for a single word and apply it to every word we come across in our message. Computing the overall probability for the whole message is then simply the multiplication of all those individual probabilities.

Let's pick one example probability calculation to describe this process mathematically:

$$
P(Message \mid Spam) = P(w_1, ..., w_n \mid Spam) \\ = P(w_1 \mid Spam) \times ... \times P(w_n \mid Spam)
$$

And that's where the Naive Bayes classifier acts naively (hence the name Naive Bayes). Because we're multiplying the probabilities we're making the bold assumption that the probabilities (presence or absence of words) are [independent of each other](https://stackoverflow.com/a/10614801). Everyone who ever received an E-Mail from a [nigerian prince](https://en.wikipedia.org/wiki/Advance-fee_scam) will agree that there's likely a dependency between words in spam messages.

### Computational and mathematical challenges

Generally speaking we're now in a position where we can turn our findings into code and implement the Naive Bayes algorithm from scratch. However there are 2 more tweaks we want to implement in order to mitigate some minor hiccups we'll run into if we don't do it.

The first challenge we're faced with is a computational problem. As we stated above we're about to multiply a lot of probabilities (one probability for every word) which tend to be very small. Moden computer architectures are only capable to deal with a [certain amount of precision](https://en.wikipedia.org/wiki/IEEE_754) when representing very large or very small numbers internally. If we're constantly multiplying small number we can run into the so-called "[arithmetic underflow](https://en.wikipedia.org/wiki/Arithmetic_underflow)" problem which will eventually turn our number into a $0$.

A well known trick to deal with this problem is to use a combination of the [exponential function](https://en.wikipedia.org/wiki/Exponential_function) and the [logarithm](https://en.wikipedia.org/wiki/Logarithm). You might remember that:

$$
\log{a b} = \log(a) + \log(b)
$$

and

$$
\exp(\log(x)) = x
$$

We can use this to "wrap" our probability calculations into $\log$ to later on "unwrap" them again via $\exp$.

The second issue is rooted in the mathematics we're attempting to carry out. Let's understand the problem by looking into a case we'll very likely face.

What would $P(W \mid S)$ be if we've only ever found $W$ in no-spam messages?

Well if we've never seen the word $W$ in a spam message, then $(P \mid S) = 0$. And exactly this will turn into a problem for us given that we have such a term in our nominator and denominator. Everything multiplied by $0$ is $0$.

In order to deal with that issue we can introduce a factor $k$ which is a parameter we can tweak (most of the time it's set to $1$).

With this factor $k$ we can express $P(W \mid S)$ as follows:

$$
P(W \mid S) = \frac{k + \textrm{spam containing W}}{(2 \times k) + \textrm{total spam}}
$$

Let's walk through a quick example to see how $k$ helps us. Our assumption is that we have analyzed $100$ spam examples but found the word $W$ exactly $0$ times. Calculating the probability that we might find the word $W$ in spam ($S$) without $k$ would result in the following:

$$
P(W \mid S) = \frac{0}{100} = 0
$$

Having this probability in a chain of probability multiplications would immediately turn the result into $0$ because $x \times 0 = 0$.

Let's introduce $k = 1$ to solve this issue:

$$
P(W \mid S) = \frac{k + 0}{(2 \times k) + 100} = \frac{1}{2 + 100} \approx 0.01
$$

Having $0.01$ in our multiplications won't hurt the accuracy while ensuring that we don't end up with a $0$ result just because one of the probability calculations resolved to $0$.

With that out of the way we're finally able to turn our findings into code!

## Implementing Naive Bayes

Before we jump right into the implementation we should draw a mental picture as to how the Naive Bayes classifier works from a high level perspective.

You might've noticed that we talked a lot about probability calculations of finding words in a set of spam or ham messages. This indicates that we need to "train" our Naive Bayes classifier with training data so that we can do these computations on the fly. Otherwise if our Naive Bayes implementation hasn't seen any messages or words before, how do we know how to calculate the probabilities via Bayes Theorem?

The next thing we should think about are the raw messages we're feeding into our Naive Bayes algorithm, both for "training" it and doing predictions later on. First and foremost we're only focusing on messages in one language to keep the implementation simple. In our case all our messages will be in English. Other than that we need to parse the raw messages and identify and extract individual words given that we're using such words in our probability calculations. This process is called [tokenization](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization), so we need to implement a function which can handle this process.

### The tokenizer

**Note**: The tokenizer we implement here is really simple. Usually you'd want to use robust NLP libraries such as [NLTK](https://www.nltk.org) for this task.

Let's start with the `tokenize` function which takes a raw message as its input and returns a list of valid words as an output.

The implementation is really straightforward. The first thing we do is to find all words via a regular expression. We then iterate over all the words we found, lowercase them and add them to our list. Once done we turn our list into a [set](https://docs.python.org/3.6/library/stdtypes.html#set-types-set-frozenset) to ensure that duplicate entries are filtered out.

```py
def tokenize(text: str) -> Set[str]:
    words: List[str] = []
    for word in re.findall(r'[A-Za-z0-9\']+', text):
        words.append(word.lower())
    return set(words)

assert tokenize('Is this a text? If so, Tokenize this text!...') == {'is', 'this', 'a', 'text', 'if', 'so', 'tokenize'}
```

### Naive Bayes

Now we're getting to the core of our implementation, the Naive Bayes classifier.

As we've stated earlier, our Naive Bayes classifier needs to be trained on existing messages in order to be able to do predictions on unseen messages later on. It therefore needs to remember what it saw and store this state internally. Because of that we'll be implementing Naive Bayes as a class.

Let's walk through the different methods the class needs step by step. We'll take a look at the code for the whole class at the end of this section.

First of all we need to implement a constructor which sets our internal state to default values and takes the $k$ parameter as an optional argument so that we can control how we want do deal with scenarios where we haven't seen a word in the spam or ham messages. If we're glancing over our probability calculations from above we can see that we need to count quantities such as how many spam messages we saw in total during training. These are such state information we initialize in our constructor:

```py
def __init__(self, k=1) -> None:
    self._k: int = k
    self._num_spam_messages: int = 0
    self._num_ham_messages: int = 0
    self._num_word_in_spam: Dict[int] = defaultdict(int)
    self._num_word_in_ham: Dict[int] = defaultdict(int)
    self._spam_words: Set[str] = set()
    self._ham_words: Set[str] = set()
    self._words: Set[str] = set()
```

Next up we need to implement a `train` function which we'll use to train our Naive Bayes classifier. "Training" in our case means that we get a list of labeled messages (messages for which we know whether they're spam or ham), iterate over each individual message, tokenize it and then iterate over every word in every message to update our internal state with the necessary information such as how many spam messages we saw in the list of messages:

```py
def train(self, messages: List[Message]) -> None:
    msg: Message
    token: str
    for msg in messages:
        tokens: Set[str] = tokenize(msg.text)
            self._words.update(tokens)
            if msg.is_spam:
                self._num_spam_messages += 1
                self._spam_words.update(tokens)
                for token in tokens:
                    self._num_word_in_spam[token] += 1
            else:
                self._num_ham_messages += 1
                self._ham_words.update(tokens)
                for token in tokens:
                    self._num_word_in_ham[token] += 1
```

Now before we jump into the implementation of the `predict` method which uses this information via Bayes Theorem calculations to do predictions for new, unseen messages it might be a good idea to implement 2 helper functions, one for every conditional probability we need to compute in Bayes Theorem.

Doing this will make the code more readable and will greatly help when implementing `predict` later on.

The implementations for our 2 methods are pretty straightforward. They're basically a translation of the conditional probability calculations, incorporating the $k$ factor to ensure that we'll never compute a $0$ probability:

```py
def _p_word_spam(self, word: str) -> float:
    return (self._k + self._num_word_in_spam[word]) / ((2 * self._k) + self._num_spam_messages)

def _p_word_ham(self, word: str) -> float:
    return (self._k + self._num_word_in_ham[word]) / ((2 * self._k) + self._num_ham_messages)
```

And now we're finally able to implement the meat of our Naive Bayes classifier. The `predict` function.

The `predict` function gets a message (we call it `text`) which it tokenizes to extract its words. Next up it iterates through all the words the Naive Bayes classifier saw during training (all words in both, spam and ham messages) to check if the word in question can also be found in the new, unseen message. While doing that it calculates the probabilities with the help of our previously defined helper functions. The return value of the `predict` function is the application of Bayes Theorem which computes an overall probability indicating how likely it is that the new, unseen message is spam.

Note that in the following implementation we're applying the tricks we learned about in our discussion of underflow problems (mainly doing the wrapping and unwrapping via $\log$ and $exp$). Applying these techniques might make the code look a little bit confusing or intimidating, however if you look closely and ignore the `log` and `exp` usages you'll find that it's just the application of Bayes Theorem.

```py
def predict(self, text: str) -> float:
    text_words: Set[str] = tokenize(text)
    log_p_spam: float = 0.0
    log_p_ham: float = 0.0

    for word in self._words:
        p_spam: float = self._p_word_spam(word)
        p_ham: float = self._p_word_ham(word)
        if word in text_words:
            log_p_spam += log(p_spam)
            log_p_ham += log(p_ham)
        else:
            log_p_spam += log(1 - p_spam)
            log_p_ham += log(1 - p_ham)

    p_if_spam: float = exp(log_p_spam)
    p_if_ham: float = exp(log_p_ham)
    return p_if_spam / (p_if_spam + p_if_ham)
```

Putting it all together, here's the full `NaiveBayes` class with all its methods:

```py
class NaiveBayes:
    def __init__(self, k=1) -> None:
        self._k: int = k
        self._num_spam_messages: int = 0
        self._num_ham_messages: int = 0
        self._num_word_in_spam: Dict[int] = defaultdict(int)
        self._num_word_in_ham: Dict[int] = defaultdict(int)
        self._spam_words: Set[str] = set()
        self._ham_words: Set[str] = set()
        self._words: Set[str] = set()

    def train(self, messages: List[Message]) -> None:
        msg: Message
        token: str
        for msg in messages:
            tokens: Set[str] = tokenize(msg.text)
            self._words.update(tokens)
            if msg.is_spam:
                self._num_spam_messages += 1
                self._spam_words.update(tokens)
                for token in tokens:
                    self._num_word_in_spam[token] += 1
            else:
                self._num_ham_messages += 1
                self._ham_words.update(tokens)
                for token in tokens:
                    self._num_word_in_ham[token] += 1

    def _p_word_spam(self, word: str) -> float:
        return (self._k + self._num_word_in_spam[word]) / ((2 * self._k) + self._num_spam_messages)

    def _p_word_ham(self, word: str) -> float:
        return (self._k + self._num_word_in_ham[word]) / ((2 * self._k) + self._num_ham_messages)

    def predict(self, text: str) -> float:
        text_words: Set[str] = tokenize(text)
        log_p_spam: float = 0.0
        log_p_ham: float = 0.0

        for word in self._words:
            p_spam: float = self._p_word_spam(word)
            p_ham: float = self._p_word_ham(word)
            if word in text_words:
                log_p_spam += log(p_spam)
                log_p_ham += log(p_ham)
            else:
                log_p_spam += log(1 - p_spam)
                log_p_ham += log(1 - p_ham)

        p_if_spam: float = exp(log_p_spam)
        p_if_ham: float = exp(log_p_ham)
        return p_if_spam / (p_if_spam + p_if_ham)
```

## Naive Bayes in action

Let's take our Naive Bayes implementation for a spin!

We'll use the "[Enron Spam](http://nlp.cs.aueb.gr/software_and_datasets/Enron-Spam)" data set to train and test our implementation.

Here's the code which downloads and extracts the data set:

```sh
wget -nc -P data http://nlp.cs.aueb.gr/software_and_datasets/Enron-Spam/preprocessed/enron1.tar.gz

tar -xzf data/enron1.tar.gz -C data
```

Reading through the [readme](http://nlp.cs.aueb.gr/software_and_datasets/Enron-Spam/readme.txt) we find that the spam and ham messages are stored in separate directories, so we need to find such directories and then iteratively open and parse every single file we find in them. We then store the data from the parsed subject line (we're only using the E-Mails subject to keep things simple) in a [`NamedTuple`](https://docs.python.org/3/library/collections.html#collections.namedtuple) and append it to a list containing all the messages. Here's the code which does just that:

```py
spam_data_path: Path = data_dir / 'enron1' / 'spam'
ham_data_path: Path = data_dir / 'enron1' / 'ham'

class Message(NamedTuple):
    text: str
    is_spam: bool

spam_message_paths: List[str] = glob.glob(str(spam_data_path / '*.txt'))
ham_message_paths: List[str] = glob.glob(str(ham_data_path / '*.txt'))

message_paths: List[str] = spam_message_paths + ham_message_paths

messages: List[Message] = []

for path in message_paths:
    with open(path, errors='ignore') as file:
        is_spam: bool = True if 'spam' in path else False
        text: str = file.readline().replace('Subject:', '').strip()
        messages.append(Message(text, is_spam))
```

And that's all there is in terms of data preparation.

Now we need to split our data into a "training" and "testing" set which we'll use to train our Naive Bayes classifier.

Our `train_test_split` function is a simple function which shuffles all the messages and then assigns them to 2 dedicated lists: One for training and one for testing. The default splitting rate is $80/20$, meaning $80\%$ of all messages will be assigned to the training set and $20\%$ of all messages will be assigned to the test set.

```py
def train_test_split(messages: List[Message], pct=0.8) -> Tuple[List[Message], List[Message]]:
    shuffle(messages)
    num_train = int(round(len(messages) * pct, 0))
    return messages[:num_train], messages[num_train:]

train: List[Message]
test: List[Message]

train, test = train_test_split(messages)
```

Training our Naive Bayes classifier is as simple as creating a new instance and calling the `train` method with the training set:

```py
nb: NaiveBayes = NaiveBayes()
nb.train(train)
```

Let's grab some spam messages from our `test` set (the data our classifier hasn't seen yet) and see what gets predicted:

```py
spam_messages: List[Message] = [item for item in test if item.is_spam]

message: str = spam_messages[10].text

print(f'Predicting likelihood of "{message}" being spam.')
nb.predict(message)

# Predicting likelihood of "get your hand clock replicas today carson" being spam.
# 0.9884313222593173
```

Almost $99\%$. Not bad!

And what about a ham message?

```py
ham_messages: List[Message] = [item for item in test if not item.is_spam]

message: str = ham_messages[10].text

print(f'Predicting likelihood of "{text}" being spam.')
nb.predict(message)

# Predicting likelihood of "associate & analyst mid - year 2001 prc process" being spam.
# 5.3089147140900964e-05
```

Great! It's time to pat yourself on the back! You've successfully implemented and trained your very own Naive Bayes classifier to reliably identify spam and ham messages!

**Note**: $99\%$ sounds too good to be true and there's certainly a smell of [overfitting](https://en.wikipedia.org/wiki/Overfitting) in the air. Remember that the data set we've used for training is rather small. Furthermore we've only trained based on the E-Mails subject line. You might want to modify the code to train on the whole message body or find a different data set altogether.

## Conclusion

Naive Bayes is a powerful Machine Learning algorithm which makes it possible to classify unseen data based on probability scores.

The basis for Naive Bayes forms Bayes Theorem, one of the most fundamental algorithms in probability theory. With Bayes Theorem one can calculate conditional probabilities such as "how likely is it that this message is spam given word $X$?" which is exactly what's necessary to implementing a spam classifier.

While we've used the classic spam filtering use case to deconstruct Naive Bayes, there are more areas this algorithm can be applied to.

Given that recent developments in Deep Learning called [Probabilistic Deep Learning](https://arxiv.org/abs/1908.03442) incorporate Bayesian thinking into their underlying models it's a good investment to solidify the understanding about Bayes Theorem and its application via Naive Bayes.

## Additional Resources

One of the main resource I studied while learning about Machine Learning algorithms such as Naive Bayes is the book "[Data Science from Scratch](https://www.oreilly.com/library/view/data-science-from/9781492041122/)" by [Joel Grus](https://joelgrus.com). This book is pure gold as it teaches you all the nitty gritty details about the most fundamental algorithms out there. If you haven't already, do yourself a favor and purchase a copy of this book. It's worth it.

The following is a list of resources I've used to compile this blog post. Other helpful resources are also linked within the article itself.

- [Joel Grus - Data Science from Scratch](https://www.oreilly.com/library/view/data-science-from/9781492041122/)
- [[JB Statistics](https://www.jbstatistics.com) - Statistics for everyone!](https://www.jbstatistics.com)
- [Wikipedia - Bayes Theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem)
- [Wikipedia - Naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
- [Math is Fun - Bayes Theorem](https://www.mathsisfun.com/data/bayes-theorem.html)
- [3Blue1Brown - Bayes Theorem](https://www.youtube.com/watch?v=HZGCoVF3YvM)
