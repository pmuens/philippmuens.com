---
title: Swift for modern Machine Learning
description: Learn why Swift has the potential to replace Python as the core driver for modern Machine Learning applications.
excerpt: Learn why Swift has the potential to replace Python as the core driver for modern Machine Learning applications.
coverImage: /assets/blog/swift-for-machine-learning/cover.jpg
date: '2020-02-13T13:31:03.000Z'
author:
  name: Philipp Muens
  website: https://philippmuens.com
  picture: /assets/blog/authors/philipp.jpg
ogImage:
  url: /assets/blog/swift-for-machine-learning/cover.jpg
---

**Note**: In this post we'll compare and contrast different programming languages. Everything discussed should be taken with a grain of salt. There's no single programming language which solves all the problems in an elegant and performant way. Every language has its up- and downsides. Swift is no exception.

Entering the Data Science and Machine Learning world there are various programming languages and tools to choose from. There's [MATLAB](https://www.mathworks.com/products/matlab.html), a commercial programming environment which is used across [different industries](https://mathworks.com/solutions.html?s_tid=gn_sol#industries) and usually the tool of choice for practicioners with a heavy Math background. A free and Open Source alternative is the [R](https://www.r-project.org) project, a programming language created in 1993 to simplify statistical data processing. People working with R usually report enjoyment as R is "hackable" and comes bundled with different math modules and plotting libraries.

A more recent incarnation is the [Julia](https://julialang.org) scientific programming language which was [created at MIT](http://news.mit.edu/2018/mit-developed-julia-programming-language-debuts-juliacon-0827) to resolve the issues older tools such as MATLAB and R struggled with. Julia cleverly incorporates modern engineering efforts from the fields of [compiler construction](https://llvm.org) and [parallel computing](https://docs.julialang.org/en/v1/manual/parallel-computing/) and given its [Open Source](https://github.com/JuliaLang/julia) nature it has gained a lot of industry-wide adoption when it reached [`v1` maturity](https://julialang.org/blog/2018/08/one-point-zero/) in 2018.

## Python as the de-facto standard

If you're doing some more research to find the most used programming language in Data Science and Machine Learning you might be surprised to see a language which wasn't built from the ground up for scientific computing: **Python**.

The [Python](https://www.python.org) programming language was created by [Guido van Rossum](https://en.wikipedia.org/wiki/Guido_van_Rossum) in 1989 to help [bridge the gap between Bash scripting and C programming](https://www.youtube.com/watch?v=J0Aq44Pze-w). Since then Python took the world by storm mainly due to its flat learning curve, its expressiveness and its powerful standard library which makes it possible to focus on the core problems rather than reinventing the wheel over and over again.

**Funny tangent**: Open up a shell, run the Python interpreter via `python` and enter `import this` or `import antigravity`

Python is a general purpose programming language which was never designed to solve problems in a niche subject matter. Are you an Instagram user? [They're running Python](https://instagram-engineering.com/tagged/python). Do you curate content via Pinterest? [They're running Python](https://www.quora.com/What-is-the-technology-stack-behind-Pinterest-1). Do you store your data via Dropbox? They've [developed their MVP in Python](https://www.quora.com/What-technology-stack-does-Dropbox-use) and [still use it today](https://blogs.dropbox.com/tech/tag/python/). Even [Google](https://google.com) (then called BackRub) started out with [Python and Java](https://web.archive.org/web/19971210065425/http://backrub.stanford.edu/backrub.html). The list goes [on and on](https://en.wikipedia.org/wiki/List_of_Python_software).

Given such an industry-wide adoption it's easy to see why a lot of care and effort were put into the ecosystem of reusable packages as well as the language itself. No matter what use case you're working on, chances are that there are numerous [Python packages](https://pypi.org) helping you solve your problems.

While more famous Python projects include Web Frameworks such as [Django](https://www.djangoproject.com) or [Flask](https://palletsprojects.com/p/flask/) there are also lot of mature [Scientific](https://www.scipy.org) and [Machine Learning](https://scikit-learn.org/stable/) implementations written in Python. Having access to such a robust foundation it only makes sense that modern Deep Learning frameworks such as [TensorFlow](https://www.tensorflow.org) or [PyTorch](https://pytorch.org) are also leveraging those libraries under the covers.

## Hitting the limits

All of the things discussed so far sound great. Python, a general purpose programming language which has quite a few years of existence under its belt is used across industries in mission critical software systems. Over the course of 30 years a vibrant Open Source community emerged which develops and maintains powerful libraries used by millions of users on a daily basis.

Why bother and replace Python? If it ain't broke, don't fix it!

Technology is constantly improving. What was once [unthinkable](https://www.youtube.com/watch?v=l9RWTMNnvi4) might all of the sudden be possible thanks to breakthroughs in [Hard](https://cloud.google.com/blog/products/ai-machine-learning/what-makes-tpus-fine-tuned-for-deep-learning)- and [Software](https://ieeexplore.ieee.org/document/1575717) development. Python was created in a different era with a different purpose. It was never engineered to directly interface with hardware or run complex computations across a fleet of distributed machines.

A modern Deep Learning Framework such as [TensorFlow](https://www.tensorflow.org) uses dozens of programming languages behind the scenes. The core of such a library might be written in high-performance [C++](https://github.com/tensorflow/tensorflow/search?l=c%2B%2B) which occasionally interfaces with different [C](<https://en.wikipedia.org/wiki/C_(programming_language)>) libraries, [Fortran](https://en.wikipedia.org/wiki/Fortran) programs or even parts of [Assembly language](https://en.wikipedia.org/wiki/Assembly_language) to squeeze out every bit of performance possible. A Python interface is usually built on top of the C++ core to expose a simple public API Data Scientists and Deep Learning enthusiasts use.

Why isn't Python used throughout the whole stack?

The answer to this question is rather involved but the gist of it is that Pythons language design is more tailored towards high level programming. Furthermore it's just [not fast enough](https://benchmarksgame-team.pages.debian.net/benchmarksgame/which-programs-are-fastest.html) to be used at the lower layers.

The following is an incomplete list of Pythons (subjective) shortcomings:

### Speed

Python code usually runs an order of magnitude slower compared to other interpreted and compiled languages. Language implementations such as [Cython](https://cython.org) which compile Python code to raw C try to mitigate this problem but they come with other issues (e.g. language inconsistencies, compatibility problems, ...).

### Parallel Processing

It's not that straightforward to write Python code which reliably performs parallel processing tasks on multiple cores or even multiple machines. Deep Neural Networks can be [expressed as graphs](https://www.tensorflow.org/tensorboard/graphs) on which Tensor computations are carried out, making it a prime use case for parallel processing.

### Hardware integration

Python is a high level language with lots of useful abstractions which unfortunately get in the way when trying to directly interface with the computers underlying hardware. Because of that heavy GPU computations are usually moved into lower-level code written in e.g. [C](<https://en.wikipedia.org/wiki/C_(programming_language)>) or [CUDA](https://en.wikipedia.org/wiki/CUDA).

### Interpreted rather than compiled

Since it's a scripting language at its core, Python comes with its own runtime that evaluates the script line-by-line as it runs it. A process called "interpretation".

The other branch of programming languages are compiled languages. Compiling code means that the human-readable program code is translated into code a machine can read and understand. Compiled programs have the downside that there's a compilation step in between writing and running the program. The upside of such step is that various checks and optimizations can be performed while translating the code, eventually emitting the most efficient machine code possible.

### Dynamic typing

Python has no concept of typing. There's no problem in passing an integer into a function which expects a string. Python will run the program and raise an exception as soon as it evaluates the broken code.

Strongly typed languages have the upside that mistakes like the one described above are impossible to make. The developer has to explicitly declare which types are expected.

Python has recently added support for [type hints](https://www.python.org/dev/peps/pep-0484/). Type hinting merely serves as another form of documentation as it still won't prevent type misuses in programs.

### Interoperability

A lot of prominent packages such as [Numpy](https://numpy.org) wrap other languages such as Fortran or C to offer reliable performance when working on computational expensive data processing tasks.

While it's certainly not impossible to introduce existing libraries written in other languages into Python, the process to do that is oftentimes rather involved.

## Entering Swift

Without going into too much detail it makes sense to take a quick detour and study the origins of the Swift programming language in order to see why it has such a potential to replace Python as the go-to choice for Data Science and Machine Learning projects.

[[Chris Lattne](https://en.wikipedia.org/wiki/Chris_Lattner)r](https://en.wikipedia.org/wiki/Chris_Lattner), the inventor of Swift has a long history and established track record in modern compiler development. During college he worked on a project which eventually became LLVM ("Low Level Virtual Machine"), the infamous compiler infrastructure toolchain. The revolutionary idea behind LLVM is the introduction of frontends and backends which can be mixed and matched. One frontend could be written for Swift which is then coupled with a backend implementation for the x86 architecture. Making it possible to compile to another architecture is as simple as using another backend such as the one for PowerPC. Back in the early compiler days one had to write the compiler end-to-end, tightly coupling the frontend and backend, making it a heroic effort to offer the compiler for different platforms.

LLVM gained a lot of traction and Chris Lattner was eventually hired by Apple to work on its developer toolings which heavily relied on LLVM. [During that time](https://www.youtube.com/watch?v=yCd3CzGSte8&t=2250s) he worked on a C++ compiler and thought about ways how a better, more modern programming language might look like. He figured that it should be compiled, easy to learn, flexible enough to feel like a scripting language and at the same time "hackable" at every layer. Those ideas translated into the Swift programming language which was officially [released at WWDC in 2014](https://www.youtube.com/watch?v=MO7Ta0DvEWA).

But what exactly makes Swift such a natural fit as a Python replacement? Isn't Swift only used for iOS and macOS apps? The following section shows why Swift could be Pythons successor.

### It's compiled

Swift is compiled via LLVM which means that its code is translated into optimized machine code directly running on the target platform. Improvements made to the LLVM compiler toolchain automatically benefit the Swift code generation.

There's the saying that Swift is ["syntactic sugar for LLVM"](https://github.com/tensorflow/swift/blob/master/docs/DesignOverview.md#swift) which rings true as one can see with the `Builtin` usage for its [core types](https://github.com/apple/swift/blob/tensorflow/stdlib/public/core/FloatingPointTypes.swift.gyb#L730-L753). The linked code snippet shows that Swifts core types directly interface with their LLVM equivalents.

### Python-like syntax

Despite the compilation process Swift feels like a dynamic, Python-esque language. Swift was designed from the ground up for programs to [incrementally grow in complexity](https://youtu.be/yCd3CzGSte8?t=2840) as necessary. The simplest of all Swift programs is just one line of code: `print("Hello World")`.

```swift
let greeting = "Hello World"
print(greeting)
// Hello World

let num1 = 1
let num2 = 2
print(num1 + num2)
// 3

let scores = [10, 35, 52, 92, 88]
for score in scores {
    print(score)
}
// 10
// 35
// 52
// 92
// 88

class Cat {
    var name: String
    var livesRemaining: Int = 9

    init(name: String) {
        self.name = name
    }

    func describe() -> String {
        return "👋 I'm \(self.name) and I have \(self.livesRemaining) lives 😸"
    }
}
let mitsy = Cat(name: "Mitsy")
print(mitsy.describe())
// 👋 I'm Mitsy and I have 9 lives 😸
```

### Static typing

Given that Swift is compiled via LLVM, it's statically type checked during the compilation process. There's no way you can pass an invalid type to a function and run into an error during runtime. If your code compiles you can be pretty sure that you're passing around the expected types.

```swift
func sum(xs: [Int]) -> Int {
    var result: Int = 0
    for x: Int in xs {
        result = result + x
    }
    return result
}

// Using correct types
let intNumbers: [Int] = [1, 2, 3, 4, 5]
let resultInt = sum(xs: intNumbers)
print(resultInt)
// 15

// Using incorrect types
let stringNumbers: [String] = ["one", "two", "three"]
let resultString = sum(xs: stringNumbers)
print(resultString)
// error: cannot convert value of type '[String]' to expected argument type '[Int]'
```

### Hackable

Swifts concepts of [protocols](https://docs.swift.org/swift-book/LanguageGuide/Protocols.html) and [extensions](https://docs.swift.org/swift-book/LanguageGuide/Extensions.html) make it dead simple to add new functionality to existing libraries or even types which ship with the language core itself. Want to add a new method to `Int`? No problem!

```swift
// One needs to implement `help` when using the `Debugging` Protocol
protocol Debugging {
    func help() -> String
}

// Implementing `Debugging` for MatrixMultiply
class MatrixMultiply: Debugging {
    func help() -> String {
        return "Offers methods to aid with matrix-matrix multiplications."
    }

    func multiply() {
        // ...
    }
}
var matMult = MatrixMultiply()
print(matMult.help())
// Offers methods to aid with matrix-matrix multiplications.

// Implementing `Debugging` for VectorMultiply
class VectorMultiply: Debugging {
    func help() -> String {
        return "Offers methods to aid with matrix-vector multiplications."
    }
}
var vecMult = VectorMultiply()
print(vecMult.help())
// Offers methods to aid with matrix-vector multiplications.

// Makes it possible to emojify an existing type
protocol Emojifier {
    func emojify() -> String
}

// Here we're extending Swifts core `Int` type
extension Int: Emojifier {
    func emojify() -> String {
        if self == 8 {
            return "🎱"
        } else if self == 100 {
            return "💯"
        }
        return String(self)
    }
}


print(8.emojify())
// 🎱
print(100.emojify())
// 💯
print(42.emojify())
// 42
```

### Value semantics

I'm sure everyone ran into this problem before. An object is passed into a function and modified without bad intentions. Meanwhile the object is used in a different place and all of the sudden its internal state isn't what it's supposed to be. The culprit is the data mutation within the function.

This problem can be mitigated easily via value semantics. When using value semantics a "copy" rather than an object reference is passed around.

```swift
// As seen on: https://marcosantadev.com/copy-write-swift-value-types/

import Foundation

// Prints the memory address of the given object
func address(of object: UnsafeRawPointer) -> String {
    let addr = Int(bitPattern: object)
    return String(format: "%p", addr)
}

var list1 = [1, 2, 3, 4, 5]
print(address(of: list1))
// 0x7f2021f845d8

var list2 = list1
print(address(of: list2))
// 0x7f2021f845d8 <-- Both lists share the same address

list2.append(6) // <-- Mutating `list2`

print(list1)
// [1, 2, 3, 4, 5]

print(list2)
// [1, 2, 3, 4, 5, 6]

print(address(of: list1))
// 0x7f2021f84a38
print(address(of: list2))
// 0x128fb50 <-- `list2` has a different address
```

### First-class C interoperability

Given that Swift compiles via LLVM it has access to existing LLVM-based implementations to interoperate with. One such project is [Clang](https://clang.llvm.org), a C language family frontend written for LLVM. Thanks to Clang it's dead simple to wrap existing C libraries and bring them into Swift projects.

The following video demonstrates how easy it is:

[![Lesson 14 (2019) - Swift: C interop; Protocols; Putting it all together](https://img.youtube.com/vi/8wd8zFzTG38/0.jpg)](https://www.youtube.com/watch?v=8wd8zFzTG38)

## Swift for TensorFlow (S4TF)

Given all the upsides described above, the TensorFlow team decided to experiment with Swift as a Python replacement to interface with TensorFlow. Early prototypes were fruitful, encouraging the TensorFlow team to officially released [Swift for TensorFlow (S4TF)](https://www.tensorflow.org/swift) in 2019.

S4TF extends the Swift core language with various features especially useful for Machine Learning tasks. Such enhancements include first-class autodiff support to calculate derivatives for functions or Python interoperability which makes it possible to reuse existing Python packages such as [matplotlib](https://matplotlib.org), [scikit-learn](https://scikit-learn.org/stable/) or [pandas](https://pandas.pydata.org) via Swift.

The following is a demonstration which shows how Swift for TensorFlow can be used to describe and train a deep neural network in TensorFlow:

[![Swift for TensorFlow: The Next-Generation Machine Learning Framework (TF Dev Summit '19)](https://img.youtube.com/vi/s65BigoMV_I/0.jpg)](https://www.youtube.com/watch?v=s65BigoMV_I)

Do you want to play around with [Swift for TensorFlow](https://www.tensorflow.org/swift) yourself? Just run the following code in a terminal to spin up a [Jupyter](https://jupyter.org) Notebook server with Swift Kernel support in a [Docker](https://www.docker.com) container:

```sh
docker run -it -p 8888:8888 --rm --name jupyter-s4tf \
    -v "$PWD":/home/jovyan/work \
    --ipc=host \
    pmuens/jupyter-s4tf:latest jupyter notebook \
    --ip=0.0.0.0 \
    --no-browser \
    --allow-root \
    --NotebookApp.token=\
    --notebook-dir=/home/jovyan/work
```

The code for the repository can be found [here](https://github.com/pmuens/jupyter-s4tf) and the Docker Hub entry is [here](https://hub.docker.com/r/pmuens/jupyter-s4tf).

## Conclusion

Python, the de-facto standard programming language for Data Science and Machine Learning has served the community very well in the past. Nevertheless, given the trajectory of technological advancements we're slowly but surely hitting the limits with the toolings we currently have.

Performance critical code is already pushed down into lower-level implementations written in programming languages such as C or Fortran and wrapped via public Python APIs. Wouldn't it be nice to write expressive, yet performant code from the get go at every layer? And what about all the libraries out there? Wouldn't it be nice to wrap and reuse them with only a couple lines of code?

The lack of static typing in Python makes it painful to work on larger, more complex projects. It's all too easy to define a model and train it on a huge dataset just to realize that a type error interrupts the training process halfway through. An error which could've been mitigated via thorough type checks.

And what if we're hitting other roadblocks? Wouldn't it be nice to be able to peek under the covers and fix the issues ourselves in an "official" way without all the [monkey-patching](https://en.wikipedia.org/wiki/Monkey_patch)?

Most large-scale Machine Learning projects already faced some, if not all of the issues listed above. The TensorFlow team experienced them too and looked into ways to solve them once and for all. What they came up with is [Swift for TensorFlow (S4TF)](https://www.tensorflow.org/swift), a Swift language extension tailored towards modern Machine Learning projects. The Swift programming language comes with various properties which makes it a perfect fit for a Python replacement: It shares a similar syntax, is compiled (and therefore runs fast), has a type system and seamlessly interoperates with existing C and Python libraries.

What do you think? Is Swift for TensorFlow the future or do we stick with Python for now? Will a language such as Julia dominate the Data Science and Machine Learning world in the future?

## Additional Resources

The following is a list of resources I've used to compile this blog post. There are also a couple of other sources linked within the article itself.

- [Swift.org - A Swift Tour](https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html)
- [Fast.ai + Swift for TensorFlow Presentation](https://docs.google.com/presentation/d/1dc6o2o-uYGnJeCeyvgsgyk05dBMneArxdICW5vF75oU/edit#slide=id.p)
- [Fast.ai - Lesson 13 (2019) - Basics of Swift for Deep Learning](https://www.youtube.com/watch?v=3TqN_M1L4ts)
- [Fast.ai - Lesson 14 (2019) - Swift: C interop; Protocols; Putting it all together](https://www.youtube.com/watch?v=8wd8zFzTG38)
- [Fast.ai - Swift Numerics](https://www.fast.ai/2019/01/10/swift-numerics/)
- [YouTube - Chris Lattner: Compilers, LLVM, Swift, TPU, and ML Accelerators | Artificial Intelligence Podcast](https://www.youtube.com/watch?v=yCd3CzGSte8)
- [YouTube - The Power of Swift for Machine Learning](https://www.youtube.com/watch?v=z5M4otA4S3A)
