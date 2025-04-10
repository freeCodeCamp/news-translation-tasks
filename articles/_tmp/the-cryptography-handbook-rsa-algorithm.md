---
title: "The Cryptography Handbook: Exploring RSA PKCSv1.5, OAEP, and PSS"
date: 2025-04-10T13:08:59.171Z
author: Hamdaan Ali
authorURL: https://www.freecodecamp.org/news/author/hamdaan/
originalURL: https://www.freecodecamp.org/news/the-cryptography-handbook-rsa-algorithm/
posteditor: ""
proofreader: ""
---

The RSA algorithm was introduced in 1978 in the seminal paper, "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems". Over the decades, as RSA became integral to secure communications, various vulnerabilities and attacks have emerged, underscoring the importance of understanding and implementing RSA correctly.

<!-- more -->

This handbook will help you understand the internal workings of the RSA algorithm, how they have evolved over the years, and the schemes defined under various RFCs. This knowledge will help you make informed choices about the most suitable RSA schemes depending on your business requirements.

In this handbook, we’ll begin by exploring the foundational principles of the RSA algorithm. By examining its mathematical underpinnings and historical evolution, you will gain insight into the diverse array of attacks that have emerged over the years.

The narrative unfolds as an evolutionary journey: from the original, straightforward (textbook) RSA implementation, through the discovery of vulnerabilities, to the development of effective countermeasures, and further refinements as new challenges were encountered. This progression illuminates how RSA has transformed over time and also demonstrates how modern cryptographic libraries have integrated these advancements to achieve secure implementations in today’s applications.

You can also watch the associated video here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/jpcLbsuHWbU" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

## Table of Contents

-   [Prerequisites][1]
    
-   [The Alice-Bob Paradigm][2]
    
-   [The Birth of the RSA Cryptosystem][3]
    
    -   [Prime Numbers and Composite Moduli][4]
        
    -   [The Euler Totient Function][5]
        
    -   [Computing the Keys][6]
        
-   [RSA Operations][7]
    
    -   [Encryption][8]
        
    -   [Decryption][9]
        
    -   [Digital Signatures][10]
        
-   [Issues with Euler’s Totient Function in RSA][11]
    
-   [The Carmichael Function][12]
    
    -   [Mathematical Implication of The Carmichael function][13]
        
    -   [The Carmichael Function in Modern Implementations][14]
        
-   [Issues with Raw RSA][15]
    
-   [Exploiting Textbook RSA’s Determinism and Malleability][16]
    
    -   [Key Generation (Setup)][17]
        
    -   [Encryption Process][18]
        
    -   [Determinism Exploit (Ciphertext Guessing Attack)][19]
        
    -   [Malleability Exploit (Ciphertext Manipulation Attack)][20]
        
-   [Low-Exponent Attacks][21]
    
-   [Håstad’s Broadcast Attack: Low Exponent Meets Multiple Recipients][22]
    
-   [Introduction to Padding Schemes in RSA][23]
    
-   [Public Key Cryptography Standards (PKCS#1 v1.5)][24]
    
    -   [The Mathematics Behind PKCS#1 v1.5][25]
-   [The Bleichenbacher Attack][26]
    
-   [Optimal Asymmetric Encryption Padding (OAEP)][27]
    
    -   [The Mathematics Behind OAEP][28]
-   [Why SHA-1 or MD5 Are Safe in RSA-OAEP][29]
    
    -   [Label Hashing][30]
        
    -   [Mask Generation Function (MGF1)][31]
        
-   [Adoption in Cryptographic Libraries (PKCS#1 v1.5 vs OAEP)][32]
    
-   [Enhancing Digital Signatures: The Transition to PSS][33]
    
    -   [Problems with Early RSA Signature Schemes][34]
        
    -   [Birth of the Probabilistic Signature Scheme (PSS)][35]
        
    -   [The Mathematics Behind PSS][36]
        
-   [The Road Ahead: Assessing RSA’s Long-Term Viability][37]
    
-   [References][38]
    

## Prerequisites

1.  **Linear Algebra:** A foundational understanding of Linear Algebra and Modular Arithmetic will help you understand certain sections of the handbook, though it is not an absolute requirement. This handbook provides comprehensive explanations of mathematical expressions and their underlying concepts as they arise.

For a concise and relevant introduction to the Chinese Remainder Theorem (CRT) in the context of the handbook, you may find this resource helpful: [CRT, RSA, and Low Exponent Attacks | YouTube][39].

2.  **Patience (and a Sense of Adventure):** RFCs can sometimes get dull to read, and research papers can feel intimidating at first glance. This handbook is designed to make standard cryptographic concepts accessible to everyone, guiding you through each step with clarity and intuition. Every concept is reinforced with clear, step-by-step examples, ensuring not only a thorough understanding but also familiarity with widely used standard notations. So take your time, take a deep breath, and embrace the journey.

For visual learners, the associated video may offer a more engaging experience.

## **The Alice-Bob Paradigm**

Throughout this handbook, you will come across numerous sequence diagrams and mathematical proofs that use the Alice-Bob Paradigm.

The Alice-Bob paradigm is a common convention in cryptography where two generic entities, often named Alice and Bob, are used to illustrate various scenarios, protocols, or cryptographic principles.

![The Alice Bob Paradigm](https://cdn.hashnode.com/res/hashnode/image/upload/v1742677993632/c9312974-4cb9-4496-8b23-b6d0d61c0a45.png)

These characters represent two parties engaged in communication, with Alice typically representing the sender or initiator, and Bob representing the receiver or responder.

We often introduce Eve as a third party, symbolizing an eavesdropper or potential attacker, adding an element of security risk, and illustrating scenarios where external entities might attempt to intercept or manipulate the communication.

## The Birth of the RSA Cryptosystem

The year 1978 witnessed the birth of a new era in cryptography with the introduction of the RSA cryptosystem, named after its inventors (Rivest, Shamir, and Adleman).

This development, introduced in the paper "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems", provided a method for secure digital communication and laid the foundation for modern public-key cryptography.

At the heart of RSA lies elementary number theory – specifically, the properties of prime numbers and modular arithmetic. Let’s first understand how these key concepts form its mathematical foundations.

### Prime Numbers and Composite Moduli

The algorithm starts by selecting two large prime numbers, denoted as _p_ and _q_. Their product (\\(n = p \\times q\\)) forms the modulus for both the public and private keys.

The security of RSA depends heavily on the fact that, while multiplying these primes is computationally straightforward, factoring the resulting large composite number _n_ is considered infeasible for sufficiently large primes.

At this point, it’s important to note that p and q must be large prime numbers to ensure RSA’s security. Fortunately, modern libraries handle this automatically by using well-established prime-generation algorithms. As a result, you can focus on higher-level aspects of your applications without having to manage the low-level details of prime selection.

For instance, let’s have a look at OpenSSL’s RSA key generation routine which performs several checks to ensure that the resulting modulus \\(n = p \\times q \\) meets the desired bit-length requirements:

The below snippet right-shifts the product of the generated primes (stored in `r1`) by `bitse - 4` bits to isolate the top 4 bits, which are then checked to ensure that the modulus meets the desired size criteria.

```
if (!BN_rshift(r2, r1, bitse - 4))
    goto err;
bitst = BN_get_word(r2);
```

The extracted bits (`bitst`) are then compared against a predefined range (from `0x9` to `0xF`). This range ensures that the most significant byte of the modulus isn’t too small or too large.

```
if (bitst < 0x9 || bitst > 0xF) {
    bitse -= bitsr[i];
```

If the significant bits do not fall within the desired range, the bit length is adjusted and the prime-generation process is retried. If the number of retries exceeds a set limit, the entire process is restarted.

```
if (!BN_GENCB_call(cb, 2, n++))
    goto err;
if (primes > 4) {
    if (bitst < 0x9)
        adj++;
    else
        adj--;
} else if (retries == 4) {
    i = -1;
    bitse = 0;
    sk_BIGNUM_pop_free(factors, BN_clear_free);
    factors = sk_BIGNUM_new_null();
    if (factors == NULL)
        goto err;
    continue;
}
retries++;
goto redo;
```

To ensure that the numbers are necessarily primes, these libraries use a combination of probabilistic tests, including the Rabin-Miler Primality Testing, and sieving methods to quickly eliminate non-prime candidates.

### The Euler Totient Function

For a number _n_ that is the product of two primes, the Euler totient function is given by:

$$\\varphi(n) = (p-1)(q-1)$$

This function counts the number of integers less than \\(n\\) that are co-prime to \\(n\\). Euler’s theorem, which states that for any integer _a_ co-prime to _n_, \\( a^{\\varphi(n)} \\equiv 1 \\pmod{n}\\) plays a central role in proving why RSA’s operations are reversible.

But most modern RSA cryptosystems use the Carmichael function instead of the Euler’s Totient Function. We will examine the reasoning behind this shift in the next few sections.

### Computing the Keys

Now we select an integer \\(e\\) such that \\(1 < e < \\varphi(n)\\)and \\(\\gcd(e, \\varphi(n)) = 1\\). This \\(e\\) becomes the public exponent you see as a parameter in the RSA function calls you make.

With that done, now let’s determine \\(d\\) as the modular multiplicative inverse of \\(e \\, \\, modulo \\, \\varphi(n)\\). In other words, \\(d\\) is computed such that:

$$e \\times d \\equiv 1 \\pmod{\\varphi(n)}$$

This step is the mathematical linchpin ensuring that decryption is the inverse operation of encryption.

In the 1978 paper, the authors explicitly provided these formulas and steps. They showed that if you encrypt a message m using \\(c = m^e \\mod n\\) and then decrypt using \\(m = c^d \\mod n \\) , the original message is recovered – thanks to the properties of modular exponentiation and Euler’s theorem. This mathematical framework was novel at the time and immediately set the stage for a new era in cryptography.

## RSA Operations

Now that the mathematical foundations are laid, the RSA algorithm can be seen as a set of three core operations: Encryption, Decryption, and Signing. Throughout this handbook's next sections, we will critically analyze these operations and learn about several pitfalls in each. Then we will examine how these were averted with the birth of new schemes, each to solve a new issue discovered on the way.

### Encryption

With the public key \\((n, e)\\) available to everyone, any user can encrypt a message \\(m\\) (where \\(m\\) is first encoded as an integer in the range \\(0 \\leq m < n\\) ) using the formula:

$$c = m^e \\mod n$$

Here, c is the ciphertext. Because the operation is based on modular exponentiation, even if m is known, recovering m from c without knowing d is computationally hard.

### Decryption

The intended recipient, who possesses the private key \\(d\\), decrypts the cipher text \\(c\\) by computing:

$$m = c^d \\bmod n$$

Using the relationship (\\(e \\times d \\equiv 1 \\pmod{\\varphi(n)}\\)) and properties from Euler’s theorem, the above operation exactly inverts the encryption step, recovering the original message \\(m\\).

This ensures that only the holder of the private key can read the encrypted message. This is the backbone of RSA’s use in secure communication.

The sequence diagram below wraps up our discussion so far:

![Sequence Diagram: Textbook RSA Encryption](https://cdn.hashnode.com/res/hashnode/image/upload/v1742754978876/9b007639-8595-4d11-93ff-355820cb98c7.png)

### Digital Signatures

Digital signatures fulfill a different security goal: authenticity and integrity rather than confidentiality. While encryption and decryption use the public key for “locking” and the private key for “unlocking,” digital signatures reverse these roles.

#### 1\. Signing

The author of a message uses their private key \\(d\\) to compute a signature \\(s\\) on the message \\(m\\), guided by the formula mentioned below:

$$s = m^d \\bmod n$$

This can later be verified by others using the corresponding public key. The purpose here is not to recover a secret message but to create a proof of authenticity.

#### 2\. Verification:

Anyone with the public key \\((n, e)\\) can verify that the signature s indeed belongs to the message \\(m\\) by computing:

$$m \\equiv s^e \\bmod n$$

If the equivalence holds, it confirms two key points: That the message has not been tampered with (that is, integrity), and that the signature must have been generated using the private key d (that is, authenticity).  
As long as \\(d\\) is kept secret, only the legitimate signer can produce a valid signature. Take at look at the sequence diagram below to understand the complete process.

![Sequence Diagram: Textbook RSA Signatures](https://cdn.hashnode.com/res/hashnode/image/upload/v1742755268516/6dea4239-f214-42c4-96c7-5fc55c7249d9.png)

## Issues with Euler’s Totient Function in RSA

While using Euler’s Totient Function works well in theory, implementers of the scheme realized its practical downsides. Simply put, the primary issue was that Euler’s Totient Function can lead to a larger private exponent \\(d\\) than what was necessary.

To completely appreciate this fact, let’s take a step back to understand why the size of the private exponent \\(d\\) matters in RSA.

RSA decryption (or signing) involves computing \\(m^d ~~mod ~n\\) which is done via modular exponentiation. The time complexity of exponentiation algorithms (like square-and-multiply) grows with the number of bits in \\(d\\). A larger \\(d\\) means more multiplications and squarings, that is slower decryption.

In practice, if using the Euler’s Totient Function makes \\(d\\) roughly twice as large as what is required, then decryption can be almost twice as slow compared to using the minimal \\(d\\). This inefficiency is especially noticeable when \\(e\\) is small (common public exponents like 3 or 65537). A small \\(e\\) leads to a very large \\(d\\) under \\(φ(n)\\).

Beyond performance, having an unnecessarily large \\(d\\) can increase storage size slightly (a few more bytes for the key). This can also lead to interoperability quirks, which is why standards and protocols such as FIPS 186-4 \[1\] and RFC 8017 \[2\] expect \\(d\\) to be below a certain size. We will take a detailed look at this in the next section.

To combat these issues, cryptographers utilized the Carmichael function to generate RSA keys. Before we dive into how the Carmichael function helps our case, let’s quickly understand what the Carmichael function actually is.

## The Carmichael Function

The Carmichael Function, represented by \\(λ(n)\\), also known as the reduced totient or least universal exponent, is defined as the smallest positive integer \\(m\\) such that for every integer \\(a\\) co-prime to \\(n\\), \\( a^m ≡ 1 (mod n)\\).

To put this in easy terms, \\(λ(n)\\) is the exponent of the multiplicative group modulo \\(n\\) (the least common multiple of the orders of all elements). For RSA-style moduli (product of primes), the Carmichael function is guided by the formula:

$$\\lambda(n) = \\operatorname{lcm}(p-1,\\,q-1)$$

where \\(n = p . q\\) with \\(p\\) and \\(q\\) being the large primes.

You may now understand the Carmichael function better if we put it in the following way: \\(λ(n)\\) is the least common multiple of \\(λ(n)\\) of each prime power dividing n. So for a prime \\(p\\), \\(λ(p) = φ(p) = p – 1\\), and for two primes, we take the \\(lcm\\) of \\(p-1 \\) and \\(q-1.\\)

### Mathematical Implication of The Carmichael function

The Carmichael function \\(λ(n)\\) is a “tighter” bound. What this means is that \\(λ(n)\\) divides \\(φ(n)\\) (since the exponent of a finite group always divides the group order by Lagrange’s Theorem \[3\])

If \\(p\\) and \\(q\\) are both odd primes, then \\(p–1\\) and \\(q–1 \\) are even, so their least common multiple is roughly half of \\((p–1)(q–1)\\). Mathematically:

$$λ(n) = \\dfrac{(p–1)(q–1)} {gcd(p–1, q–1)}$$

We can observe that this \\(λ(n)\\) is lesser than or equal to \\(φ(n)\\) and often considerably smaller. This means \\(λ(n)\\) provides the minimal exponent needed for RSA’s correctness, whereas \\(φ(n)\\)might be a larger number that still works but isn’t necessary.

When you choose two large random primes \\(p\\) and \\(q\\), you have:

$$\\varphi(n) = (p-1)(q-1) \\approx n,$$

because for large primes, the subtracted ones make only a small difference compared to \\(p\\) and \\(q\\) themselves.

Now, since both \\(p-1\\) and \\(q-1 \\) are even, they each have a factor of 2. If those are their only common factors (which is often the case for random primes), then:

$$\\lambda(n) = \\mathrm{lcm}(p-1, q-1) \\approx \\frac{\\varphi(n)}{2}.$$

When you compute the private exponent \\(d\\) as the modular inverse of \\(e\\) (a small number) modulo \\( \\varphi(n)\\) versus modulo \\(\\lambda(n)\\), the range from which \\(d\\) is chosen is roughly twice as large in the former case. That means the typical \\(d\\) when computed modulo \\(\\varphi(n)\\) can be about twice as large as when computed modulo \\(\\lambda(n)\\). A larger \\(d\\) means that during decryption (or signing) the modular exponentiation \\(c^d \\mod n\\) takes slightly more time.

Intuitively, using \\(λ(n)\\) ensures we don’t “overshoot” the exponent required for the modular arithmetic to cycle back to 1.

A smaller \\(d\\) makes every RSA decryption and signature operation faster. For instance, if \\(λ(n)\\) is roughly half of \\(φ(n)\\), then \\(d\\) will have one less bit than it would otherwise, cutting the exponentiation work by about 50%. This is a free performance gain, as we aren’t changing the security assumptions or the key size \\(n\\), just using the mathematically tight value for the exponent. The RSA algorithm’s security is not weakened by this and now the \\(d\\) is different but functionally equivalent.

### The Carmichael Function in Modern Implementations

The critical property for RSA (\\(e·d ≡ 1 ~mod ~~λ(n)\\)) is both necessary and sufficient for correct decryption, thanks to Carmichael’s theorem. So there’s no need for \\(d\\) to also satisfy the stronger condition modulo \\(φ(n)\\).

By switching to computing \\(d ~ modulo ~~ λ(n)\\) (i.e., \\(d = e^{-1} ~mod ~~λ(n)\\)), we directly get the smallest working private exponent. Ronald Rivest himself noted this optimization in his 1999 seminal paper \[4\], stating that solving for \\(d\\) using \\( λ(n)\\) instead of \\(φ(n)\\) is slightly preferable because it can result in a smaller value for d.

Over time, the use of \\( λ(n)\\) in RSA moved from an academic suggestion to an industry standard. Today’s cryptographic standards explicitly acknowledge or require the \\(λ(n)\\) approach.

For example, the official RSA standard (PKCS #1 v2.2, RFC 8017 \[2\]) defines the RSA key generation in terms of \\(λ(n)\\). It specifies that the private exponent \\(d\\) is chosen such that \\(e·d ≡ 1 (mod λ(n))\\) (with \\(λ(n) = lcm(p–1, q–1)\\)). In other words, PKCS #1 expects the Carmichael function to be used for the modulus of the exponent. Likewise, NIST’s FIPS 186-4 (Digital Signature Standard) mandates that \\(d\\) be less than \\(λ(n)\\).

Any RSA key where \\(d\\) is larger than \\(λ(n)\\) is considered non-compliant in those strict contexts. This effectively forces implementations to use the smaller \\(λ(n)\\)-based exponent, since any “oversized” \\(d\\) can be reduced \\(mod ~~λ(n)\\) to meet the criterion.

Standards such as FIPS 186-4 \[1\] (the Digital Signature Standard) and RFC 8017 \[2\] (which specifies PKCS#1 v2.2 for RSA Cryptography) include requirements or recommendations that imply the private exponent \\(d\\) should be as small as possible and ideally less than \\( \\lambda(n)\\). Using \\(\\lambda(n)\\) (the least common multiple of \\(p-1\\) and \\(q-1\\)) directly produces the smallest valid \\(d\\), whereas using \\(\\varphi(n)\\) often results in a \\(d\\) that is larger than necessary. This not only improves performance (by reducing the number of modular multiplications needed during decryption/signing) but also helps maintain interoperability with protocols that expect d to be below a certain size.

The Python cryptography library (PyCA cryptography) explicitly documents \[5\] that it uses Carmichael’s totient to generate the “smallest working value of \\(d\\),” noting that older implementations (including the original RSA paper) used Euler’s totient and ended up with larger exponents. OpenSSL also uses the Carmichael function in their low-level RSA APIs \[6\].

This shift to the Carmichael function ensures that under the hood your RSA key is a bit more efficient than the ones from the late 1970s while providing the same level of security.

## Issues with Raw RSA

Raw or “Textbook” RSA soon turned out to be insecure when two major weaknesses were discovered.

The operations involved in RSA are entirely deterministic, which means that for a given plaintext \\(m\\), encryption always produces the same cipher text \\(C = m^e \\mod n\\).

An eavesdropper or an attacker, say Eve, can guess or derive plain texts by exploiting the predictability of outputs. Since RSA encryption is a public operation, an attacker can encrypt likely messages and compare results to a target cipher text – a trivial chosen plaintext _attack_.

Besides this, textbook RSA is also malleable. This means that its algebraic structure allows attackers to manipulate cipher texts in meaningful ways. For instance, given a cipher text \\(C = RSA(M)\\), an attacker can multiply it by the encryption of a known value (say, r) to produce a new cipher text \\(C’ = C · r^e ~~mod ~n\\), which decrypts to the plaintext \\(M·r\\). When the legitimate receiver decrypts \\(C'\\), the result is \\(M·r\\), from which the attacker can often recover \\(M\\).

Let’s understand these vulnerabilities with a small practical example.

## Exploiting Textbook RSA’s Determinism and Malleability

### **Key Generation (Setup)**

For our toy example, we’ll choose small prime numbers and generate an RSA key pair:

Let’s select the values of \\(p =3\\) and \\(q=11\\). Both of these values are prime. Now, compute the modulus and Totient Function as follows:

$$\\begin{gather} \\begin{split} n = p × q = 3 × 11 = 33 \\\\ φ(n) = (p – 1) × (q – 1) = 2 × 10 = 20 \\end{split} \\end{gather}$$

Now choose the public exponent. Let’s consider \\(e=3\\) since it is coprime with \\( φ(n) = 20\\), and \\(gcd(3, 20) = 1\\).

Now let’s compute the private exponent. We know that d is the modular inverse of \\(e ~~mod ~φ(n)\\). We need to find d such that \\((d × e) ≡ 1~~ (mod ~20)\\). Using this knowledge we can compute \\(d = 7\\) as \\(3 × 7 = 21 ≡ 1 ~~ (mod~ 20)\\).

Finally, the public key is \\((n = 33, ~ e = 3)\\) and the private key (secret) is \\(d = 7\\).

### Encryption Process

Now, let’s encrypt a simple message using the above key. Let us select our plaintext to be \\(M = 4\\). The cipher text in this case would be:

$$\\begin{gather} \\begin{split} C = 4^3 ~~mod ~33 \\\\ C = 64 ~~mod ~33 \\\\ C = 64 – 33×1 = 31 \\end{split} \\end{gather}$$

To consolidate the findings so far, if we encrypt message \\(4\\) with the public key \\((e=3, n=33)\\), we will produce the cipher text \\(31\\). Now, let’s try the exploits.

### Determinism Exploit (Ciphertext Guessing Attack)

Textbook RSA is deterministic – the same plaintext always yields the same ciphertext (with no randomness involved). An attacker who intercepts the ciphertext \\(C=31\\) can exploit this by encrypting likely plaintext guesses and comparing results:

The adversary, say Eve, will try encrypting candidate plaintexts with the public key and see which one produces \\(31\\). They may pick randomized values to increase their efficiency:

$$\\begin{gather} \\begin{aligned} Guess~ M = 1 ⇒ 1^3~~ mod ~33 = 1 \\\\ Guess~ M = 2 ⇒ 2^3~~ mod ~33 = 8 \\\\ Guess~ M = 3 ⇒ 3^3~~ mod ~33 = 27 \\\\ Guess~ M = 4 ⇒ 4^3~~ mod ~33 = 31 \\\\ \\end{aligned} \\end{gather}$$

By simply comparing ciphertexts, the attacker finds that encrypting \\(4\\) yields 31, which matches the intercepted ciphertext. Thus, the attacker learns the original plaintext \\(M\\) was \\(4\\). This is possible because there’s no randomization in textbook RSA – an eavesdropper can identify a message by trial encryption of guesses, breaking confidentiality if the message space is small or guessable.

### Malleability Exploit (Ciphertext Manipulation Attack)

Raw RSA is also malleable. This means an attacker can take a ciphertext and modify it in a way that results in a predictable change in the decrypted plaintext. Let’s understand how this works.

RSA has a multiplicative property, that is, multiplying two ciphertexts corresponds to multiplying their plaintexts before encryption:

$$E(M\_1) \\cdot E(M\_2) \\mod n = (M\_1^e \\mod n)\\times(M\_2^e \\mod n) \\mod n = (M\_1 \\cdot M\_2)^e \\mod n$$

The sequence diagram below explains how the malleability exploit works in naive RSA.

![Sequence Diagram: Malleability Exploit](https://cdn.hashnode.com/res/hashnode/image/upload/v1741314973046/6be306c5-3ca6-4ea8-8daf-d1937b6459df.png)

Alice sends a ciphertext to Bob after the initialization phase. Note that by this point, n and e are public knowledge. Eve intercepts this ciphertext by using mechanisms such as a MiTM (Man in the Middle) attack.

Now, Eve picks a known value to manipulate the message. Let’s say the attacker chooses \\(X = 2\\) (with the intent to double the original plaintext).

Then they compute the encryption of X using the public key:

$$E(X) = 2^3 \\mod 33 = 8.$$

Now, Eve multiplies the original ciphertext by this value (mod n) to get a new ciphertext:

$$\\begin{gather} \\begin{split} C{\\prime} = C \\times E(X) \\mod n = 31 \\times 8 \\mod 33 \\\\ C{\\prime} = 248~~ mod~ 33 = 248 – 33×7 = 248 – 231 = 17 \\end{split} \\end{gather}$$

This new ciphertext \\(C{\\prime}\\) is the encryption of the product of the original plaintext and \\(2\\). If we directly encrypted \\(M \\times X = 4 \\times 2 = 8\\) with RSA, we would get \\(8^3 \\mod 33 = 512 \\mod 33 = 17\\). This means that \\(C′\\) corresponds to the plaintext \\(8\\), which is the original message \\(4\\) multiplied by \\(2\\).

In a real-world chosen ciphertext attack, the attacker may have access to a decryption oracle or observe a system response that reveals information about \\(M{\\prime}\\). The decryption result \\(8\\) is exactly \\(M \\times 2\\) (the original message multiplied by the attacker’s chosen factor). Knowing the factor \\(X = 2\\), the attacker can deduce the original message by dividing: \\(8/ 2 = 4\\).

Note that Eve has not broken the mathematical foundations behind RSA here. They have only used the public key to compute an encryption of \\(2\\), and then combined it with the intercepted ciphertext. They don’t know the original plaintext yet, but they have manipulated the ciphertext in a way that they know the new plaintext is twice the original message.

## Low-Exponent Attacks

Beyond determinism and malleability exploits, textbook RSA is also vulnerable to Low-Exponent Attacks. Using a small public exponent like \\(e = 3\\) (or sometimes \\(17\\)) was popular because it used to speed up encryption and signature verification. But this soon turned out to be a security concern.

When RSA uses a small public exponent (say, \\(e = 3\\)) and the plaintext is very short (so that \\(M^3\\) is smaller than the modulus \\(n\\)), the encryption does not “wrap around” modulo \\(n\\). Mathematically:

$$c = M^3 \\mod n = M^3 \\quad \\text{(if \\( M^3 < n \\))}$$

Let’s understand this with an easy example:

Consider our plaintext to be: \\(M = 5\\). We compute \\(M^3\\) as \\(M^3 = 5^3 = 125\\).

Now assume \\(n\\) is a \\(4096\\)‑bit number which is large compared to \\(125\\). In this case, the ciphertext is simply \\(c = 125\\). Eve intercepting \\(c = 125\\) can compute the cube root of \\(125\\) to get the plaintext: \\(\\sqrt\[3\]{125} = 5\\) thus recovering \\(M\\) directly.

This shows that if \\(M\\) is small enough, the ciphertext leaks the plaintext when \\(e\\) is low.

## Håstad’s Broadcast Attack: Low Exponent Meets Multiple Recipients

In 1985, Johan Håstad’s highlighted the broadcast attack that illustrates the danger of a low exponent, \\(e\\), when the same message is sent to multiple parties as a broadcast.

Imagine Alice wants to send the same plaintext message M to three different recipients. Each recipient has their own RSA public key with modulus \\(N\_1, N\_2, N\_3,\\) but for speed all use \\(e = 3\\) (a common practice historically). Alice encrypts \\(M\\) with each public key, yielding ciphertexts:

$$\\begin{gather} \\begin{split} C\_1 = M^3 \\bmod N\_1 \\\\ C\_2 = M^3 \\bmod N\_2 \\\\ C\_3 = M^3 \\bmod N\_3 \\end{split} \\end{gather}$$

Eve, who intercepts all three \\(C\_1, C\_2, C\_3\\) can recover _M_ without breaking any single RSA key.

Since each \\(N\_i \\) is different (and we assume they are pairwise coprime, as RSA keys should be), the attacker can use the Chinese Remainder Theorem (CRT) to combine the three congruences \\(x \\equiv C\_i \\pmod{N\_i}\\). Note that at this point Eve only has \\(C\_1\\), \\(C\_2\\) and \\(C\_3\\). They do not have the plaintext \\(M\\) or \\(M^3\\) and yet they can reconstruct \\(M^3\\) with the intercepted data. To understand the Chinese Remainder Theorem and this reconstruction, you may follow this: [CRT, RSA, and Low Exponent Attacks | Youtube][40].

There is a unique solution modulo \\(N\_1N\_2N\_3\\) for \\(x\\), and that solution turns out to be an integer, \\(x = M^3\\) (because the true integer \\(M^3\\) is smaller than the product \\(N\_1N\_2N\_3\\) of each \\(M < N\_i \\) ). In essence, CRT lets Eve reconstruct \\(M^3\\) exactly. Once they have \\(M^3\\) as an ordinary integer, they simply take the cube root to find \\(M\\). There’s no need to factor any modulus or invert the RSA function – the math falls out due to the low exponent.

The sequence diagram below aims to provide a high-level understanding of the attack:

![Sequence Diagram: Håstad’s Broadcast Attack](https://mermaid.ink/img/pako:eNqNlN9P2zAQx_-VmyWkIpWqSeostTQkFvawh-6h7AFNEcgk19RSY3e2A3RV__dd-gNoExB5is_f-_jum3PWLDcFMsEc_q1R53itZGlllWmgZymtV7laSu3haqFyhN4N6gLteXv_u3mA3hRppZCWQYckldYs3orCDtG1fMS3mqhD86ORXBWPaJ20KxLsJL-MRzAUPSlW7NdPlOvAG3AUhwqdkyXCpIn4uUUEezjVDQ7MYxJcXF62OxXQbDugyBytx2cPvfQ-gG8wuYugMgXo-4MfHbwOW7qJ4RExfJ_Y9rAbGB0Boxcjz862Fivt0ea4JNP2ZjnoFcZ7LEBaa57cvoST7wEX79j08xVI_nyQ22nJUXb4QXZX-0fJUXtiTkACKN1o522dU0rvdufUOdRO6RLS6e8DolUBFdCCpaZa1p7sS-sHhKkxHswMbj9RRhOgsWw2aXTnJLOqVFouXuf3S6ZZn1VoK6kKusrrBpoxEleYMUGvBc5kvfAZy_SGpLL25malcyaoPeyzellIf7j5TMzkwlGUbhoTa_bMRMCHAx7xMU84j5I4HPfZiolRMhgNR-NkxOM45FE8ijd99s8YIgwH4zCMEp4EQTLkX0MebHF_tpu7M7FQ3tjJ7uez_Qf1mTV1OX85v7RNNzu13Q53amrtmUjGm_8gLoH2?type=png)

Now let’s see this attack in action with a sample:

Suppose three different RSA public keys all use exponent \\(e=3\\), with moduli \\( n\_b = 187\\) (for Bob),  
\\(n\_c = 115 \\) (for Carol), and \\(n\_d = 87\\) (for Dave).

These \\(n\_i\\) are pairwise coprime (\\(gcd\\) of each pair is \\(1\\)). Now assume the same plaintext message \\(M\\) is encrypted with each public key. Let’s take a concrete \\(M\\). For example with \\(M=42\\), we will have:

$$\\begin{gather} \\begin{split} c\_b = M^3 \\bmod n\_b \\\\ c\_c = M^3 \\bmod n\_c \\\\ c\_d = M^3 \\bmod n\_d \\\\ \\end{split} \\end{gather}$$

On calculating these, we have:

$$\\begin{gather} \\begin{split} c\_b = 42^3 \\bmod 187 = 36 \\\\ c\_c = 42^3 \\bmod 115 = 28 \\\\ c\_d = 42^3 \\bmod 87 = 51 \\\\ \\end{split} \\end{gather}$$

So the three ciphertexts observed are \\(36\\), \\(28\\), and \\(51\\), respectively. Eve who knows \\(n\_b, n\_c, n\_d\\) and these ciphertexts can now recover \\(M\\) as follows:

1.  Eve will compute the total modulus \\(N = n\_b \\cdot n\_c \\cdot n\_d = 187 \\times 115 \\times 87 = 1,870,935.\\) (This is the modulus for the combined system of congruences).
    
2.  Now Eve will compute the partial products for each congruence:
    

$$\\begin{gather} \\begin{split} N\_b = \\frac{N}{n\_b} = \\frac{1,870,935}{187} = 10,005 \\\\ N\_c = \\frac{N}{n\_c} = \\frac{1,870,935}{115} = 16,269 \\\\ N\_d = \\frac{N}{n\_d} = \\frac{1,870,935}{87} = 21,505 \\end{split} \\end{gather}$$

3.  At this point, Eve needs the inverses of each \\(N\_i\\) modulo its corresponding \\(n\_i\\):
    
    -   First Eve computes \\(M\_b = (N\_b)^{-1} \\bmod n\_b\\), i.e. the number \\(M\_b\\) such that \\(N\_b \\cdot M\_b \\equiv 1 \\pmod{187}\\). In this case, \\(N\_b = 10005\\). Using the extended Euclidean algorithm, Eve can find \\(M\_b = 2\\) (since \\(10005 \\times 2 = 20010 \\equiv 1 \\pmod{187}\\)).
        
    -   Then Eve computes \\(M\_c = (N\_c)^{-1} \\bmod n\_c\\). Here \\(N\_c = 16269\\). The inverse mod \\(115\\) turns out to be \\(M\_c = 49\\) (For verification: \\(16269 \\times 49 \\equiv 1 \\pmod{115}\\)).
        
    -   Next up, Eve computes \\(M\_d = (N\_d)^{-1} \\bmod n\_d\\). For \\(N\_d = 21505\\), the inverse mod \\(87\\) is \\(M\_d = 49\\) as well (coincidentally the same value in this case, since \\(21505 \\times 49 \\equiv 1 \\pmod{87}\\)).
        

Now Eve reconstructs the combined value using the Chinese Remainder Theorem for three congruencies. The construction of this formula is beyond the scope of this handbook, but to completely understand how this springs into action, you may go through this video: [CRT, RSA and Low Exponent Attacks | Youtube][41].

$$C \\;=\\; c\_b \\cdot N\_b \\cdot M\_b \\;+\\; c\_c \\cdot N\_c \\cdot M\_c \\;+\\; c\_d \\cdot N\_d \\cdot M\_d \\pmod{N}$$

On substituting the numbers:

$$C = 36 \\cdot 10005 \\cdot 2 \\;+\\; 28 \\cdot 16269 \\cdot 49 \\;+\\; 51 \\cdot 21505 \\cdot 49 \\pmod{1,870,935}$$

Let’s carefully evaluate each term:

$$\\begin{gather} \\begin{split} 36 \\cdot 10005 \\cdot 2 = 720,360 \\\\ 28 \\cdot 16269 \\cdot 49 = 22,341,348 \\\\ 51 \\cdot 21505 \\cdot 49 = 5,37,40,995 \\\\ \\end{split} \\end{gather}$$

Summing these gives a raw total of \\(7,20,360 + 2,23,21,068 + 5,37,40,995 = 7,67,82,423\\). Now reduce this modulo \\(N = 1,870,935\\):

$$\\begin{align} \\begin{split} C \\equiv 7,67,82,423 \\pmod{1,870,935}\\\\ C = 74,088 \\\\ \\end{split} \\end{align}$$

Now Eve will simply take the cube root of \\(C: \\sqrt\[3\]{74088} = 42\\), which is the original plaintext.  
Eve has successfully recovered \\(M\\).

The key takeaway from these attacks is that without proper defenses. RSA alone does not satisfy modern definitions of security. It is not resistant to chosen-plaintext or chosen-cipher text attacks. This gap between the theoretical one-way function (RSA’s trapdoor permutation) and a secure encryption scheme became evident as implementers found that naive RSA could be “broken” by various clever tricks.

To counter these weaknesses, standards bodies introduced padding schemes to strengthen RSA encryption. In the following sections, you will learn about each of these paddings schemes and how they’ve been exploited over the years.

## Introduction to Padding Schemes in RSA

Before we dive into the padding schemes and how it helps our case, let’s quickly recap the need for padding in RSA.

Textbook RSA encryption is deterministic. The same plaintext always produces the same ciphertext under a given public key. This determinism makes raw RSA insecure. An attacker can guess possible messages, encrypt them with the public key, and compare with the target ciphertext to see which guess matches.

Beyond determinism, small-exponent attacks illustrate why padding is critical. If the message \\(m\\) is too small relative to the modulus, raising it to a small public exponent (like \\(e=3\\)) might not wrap around \\(N\\). Padding the plaintext with random data before encryption remedies these problems by making the ciphertext unpredictable and ensuring \\(m^e\\) spans the modulus’ range.

## **Public Key Cryptography Standards (PKCS#1 v1.5)**

In 1998, Kaliski and RSA Laboratories introduced PKCS#1 v1.5 to the world in a public publication \[7\]. In PKCS#1 v1.5, every RSA‐encrypted message is wrapped inside a special “encryption block” \\(EB\\). This block ensures that the raw message is both the right size for RSA and padded in a way that’s hard to tamper with.

In this scheme, the plaintext is padded to the size of the modulus \\(N\\) (in bytes) as:

$$EB = 00 ~||~ BT ~||~ PS ~||~ 00 ~||~ M$$

Here, \\(0x00\\) (Leading Zero Byte) is always at the front. It ensures that, when the concatenated string \\(EB\\) is converted to a big‐endian integer, the value is less than the RSA modulus (that is, we don’t end up with a number too large for RSA to handle). You will better appreciate this fact when we dive into the mathematics behind this.

The next octet is the Block Type, \\(BT\\), which tells us the “type” of padding being used. The standard defines three possible \\(BT\\) values: \\(00, 01, \\) and \\(02\\)- to support different operations. For example, \\(BT=00\\) and \\(BT = 01\\) is used for private-key operations (such as digital signatures) and \\(BT = 02\\) is used for public-key operations. For encryption under PKCS#1 v1.5, this is always \\(0x02\\). It’s basically a label that says, “This is an encryption block, not something else”.

The next block is the Padding String \\(PS\\). This is a string of nonzero random bytes. This is crucial for security because it introduces randomness into each encryption. If the same message is encrypted multiple times, these random bytes ensure that each ciphertext looks different, foiling many simple attacks that rely on seeing repeated patterns.

The next octet, \\(0x00\\), is a Delimiter**.** This single zero byte marks the end of the padding. During decryption, this helps the recipient quickly identify where the padding stops and the real message begins.

Finally, we have the actual data you want to protect – \\(M\\). Once the recipient has verified the padding, they know exactly where to find this message.

This mechanism helped solve the deterministic issue of naive RSA. In the next sections, let’s understand the mathematics involved in PKCS#1 v1.5 padding and its security implications.

### The Mathematics Behind PKCS#1 v1.5

Before we begin, let’s get our symbols and abbreviations correct. We will use upper-case symbols (such as \\(EB\\)) to denote octet strings and bit strings. We will use lower-case symbols (such as \\(n\\)) to denote integers.

In PKCS#1 v1.5, we will use \\(k\\) to represents the length of the RSA modulus \\(n\\) in bytes. For example, if you have a \\(1024\\)-bit RSA key, then the RSA modulus \\(n\\) is a \\(1024\\)-bit number. Since there are \\(8\\) bits in a byte, if your RSA modulus is \\(L\\) bits long, then:

$$k = \\left\\lceil \\frac{L}{8} \\right\\rceil = \\frac{1024}{8} = 128 \\text{ bytes}$$

The total length of the encryption block will be equal to this RSA key length \\(k\\) (in bytes). Now here the length of the data \\(M\\) shall not be more than \\(k-11\\) octets, since the 11 bytes are consumed by the blocks – \\(0x00 ~||~ 0x02 ~||~ PS ~||~ 0x00\\). This limitation guarantees that the length of the padding string \\(PS\\) is at least eight octets, which is a security condition in PKCS#1v1.5:

$$∣PS∣=k~−∣M∣−~3$$

For example, with a \\(1024\\)-bit RSA modulus, the value of \\(k\\) comes out to be \\(128\\). Here Alice could encrypt up to \\(128 - 11 = 117\\) bytes of data. The \\(11\\) bytes are used for the \\(0x00 ~||~ 0x02 ~||~ PS ~||~ 0x00\\) structure. The random \\(PS \\) ensures that each encryption of the same message produces a different ciphertext, preventing the deterministic encryption problem.

RSA doesn’t directly operate on the bytes. Once the padded string \\(EB\\) is ready, it needs to be converted into an integer guided by the Octet String to Integer Primitive (OS2IP) formula:

$$x = \\sum\_{i=1}^{k} 2^{8(k - i)} \\,\\mathrm{EB}\_i$$

where \\(EB\_i\\) are the octets of \\(EB\\) from first to last. In other words, \\(EB\_1\\) (the first byte) is the most significant byte, and \\(EB\_k\\) (the last byte) is the least significant. Now Alice can simply encrypt this block using \\(C = x^c \\mod n\\).

To solidify our learnings so far, let’s apply this to a sample plaintext and find the padded blocks.

Let’s assume the RSA modulus is \\(8\\) bytes long (\\(k=8\\)). Suppose we want to encrypt a message \\(M\\) that is \\(2\\) bytes long. Then the padding string \\(PS\\) must fill the remaining space:

$$Total ~ bytes=k=8=1(0x00)+1(BT)+∣PS∣+1(delimiter)+∣M∣$$

Since \\(∣M∣=2\\) and there are \\(∣M∣=2∣\\) fixed bytes, can find the required length of the padding string:

$$∣PS∣=8−3−2=3 ~ bytes$$

Let’s pick 3 arbitrary nonzero bytes for \\(PS\\), say - \\(0xA3, ~0x5F, ~0xC2\\). And let’s say the message is the ASCII text “Hi”. In hexadecimal, that’s: \\(0x48\\) for 'H' and \\(0x69\\) for 'i'.

Thus, the complete encryption block becomes:

![Sample Encryption Block in PKCS#1 v1.5](https://cdn.hashnode.com/res/hashnode/image/upload/v1742368983011/f682532c-6664-4197-8e77-60ea034f82c5.png)

Now we will convert this octet string to an integer using the OS2IP formula we discussed above:

$$x = \\sum\_{i=1}^{k} 2^{8(k - i)} \\,\\mathrm{EB}\_i$$

For our example, with \\(k=8\\) the conversion is:

$$x=  0x00×256^7+0x02×256^6+0xA3×256^5+0x5F×256^4+0xC2×256^3+0x00×256^2+0x48×256^1+0x69×256^0$$

Note that the hexadecimal values can be converted to decimal as needed. For instance, \\(0xA3 = 163, 0x5F = 95, 0xC2 = 194, 0x48 = 72,\\) and \\(0x69 = 105\\).

There is an interesting observation in the application of this formula. Because the first two bytes are fixed (\\(0x00\\) and \\(0x02\\)), the integer \\(x\\) has a known lower bound. The contribution of the first two bytes is:

$$0×256^ 7 +2×256^ 6 =2×256^ 6$$

The rest of the bytes (\\(PS\\), the delimiter, and \\(M\\)) add some value that is at least \\(0\\) and at most just less than \\(256^6\\) (since the second byte is fixed as \\(0x02\\) and cannot be \\(0x03\\)). Thus, \\(x\\) is in the range:

$$2×256 ^ 6 ≤x<3×256 ^ 6$$

This property which makes the range predictable, paved the way for the Bleichenbacher attack (also known as the “padding oracle” attack). If a system reveals whether a decrypted block is “correctly padded,” an attacker can systematically probe different ciphertexts and narrow down the plaintext – because the attacker knows it must lie in that narrow range. Let’s take a detailed look at the Bleichenbacher attack in the next sections and understand how the exploit works.

## The Bleichenbacher Attack

In 1998, Daniel Bleichenbacher published a seminal paper \[8\] demonstrating an adaptive chosen-ciphertext attack against RSA with PKCS#1 v1.5 padding. The Bleichenbacher Attack, also dubbed as the “million messages” attack, demonstrated that if an attacker has access to an oracle that tells whether a submitted ciphertext decrypts to a properly padded plaintext (that is, whether the PKCS#1 v1.5 formatting is correct), the attacker can gradually recover the full plaintext. Let’s break down how this attack works:

First, Eve needs an Oracle. The attack assumes the attacker can query a system, such as an SSL/TLS server, and find out if a given ciphertext \\(C\\) is PKCS#1 v1.5 conformant. In the 1998 paper, Bleichenbacher exploited the fact that a TLS server, when presented with an improperly padded RSA-encrypted premaster secret, would respond with a specific error alert if the padding was wrong. Essentially, the server acted as an oracle: it would decrypt \\(C\\) with its private key and simply tell the attacker “padding OK” or “padding error” (the error could be timing-based or an explicit alert).

Note that the oracle does not reveal the plaintext. It only reveals a single bit of information at a time: “valid padding or not.” This might seem harmless, but Bleichenbacher showed that it’s enough to eventually recover the plaintext.

To quickly recap, the attacker’s goal is to find the unknown message integer \\(m\\) (the PKCS#1-padded plaintext as an integer) given its ciphertext \\(C = m^e \\bmod N\\), using the oracle. We know that if \\(m\\) is properly padded, it lies in a specific numeric range: \\(2B \\le m < 3B\\) where \\(B = 2^{8\*(k-2)}\\), as defined earlier.

If \\(k=128\\) bytes, then \\(B=2^{8\*126}\\), and a correctly padded \\(m\\) will start with \\(0x00 ~||~0x02\\), so it’s between \\(2B\\) and \\(3B\\). The attacker, Eve, initially only knows that \\(m\\) is in the range \\(\[2B, 3B)\\).

In the Bleichenbacher Attack, Eve will exploit RSA’s multiplicative property. They will choose a number \\(s\\) (called the multiplier) and compute a new ciphertext \\(C' = (C s^e) \\bmod N\\). This \\(C'\\) here corresponds to a new plaintext: \\(m' = m s \\bmod N\\) (because \\(C' \\equiv m^e \* s^e \\equiv (ms)^e \\pmod{N}\\)).

To begin the attack, Eve finds some \\(s\_0\\) such that \\(C\_0 = C \* (s\_0)^e \\mod N\\) yields a valid padding. This is referred to as the Blinding step. This is usually easy – for example, \\(s\_0\\) can be chosen so that \\(m \* s\_0\\) is just slightly above \\(N\\), which almost certainly will wrap around and land in \\(\[2B,3B)\\). The attacker does not know \\(m\\) to verify this directly. They rely on the padding oracle’s yes/no response to infer that the blinded plaintext \\((m×s\_0)\\mod  N\\) falls in the correct range.

If the oracle returns “valid padding” for a given \\( s\_0\\), it tells the attacker that \\(s\_0 \\mod N\\)lies between \\(2B\\)and \\(3B\\). Mathematically:

$$2B≤(m×s\_0)~mod  N<3B$$

Now, Eve will try to try to narrow down this range in a loop, which is often referred to as the interval having step. Initially, Eve had one wide interval \\(\[a, b\] = \[2B, 3B)\\) that contains \\(m\\). In each iteration, Eve tries increasing values of \\(s\\) (starting from a certain minimum) until the oracle returns “padding OK” for \\(C' = C\_0 \* s^e\\). Suppose this happens at some \\(s = s\_i\\). Given this feedback, Eve now knows:

$$2𝐵 ≤  (𝑚 × 𝑠\_i) ~ mod 𝑁 < 3𝐵$$

This congruence implies there exists some integer \\(r\\) such that:

$$2B  ≤ ( m×s\_i)−rN  <  3B$$

Rearranging, we get a constraint on \\(m\\):

$$\\frac{2B+rN}{s\_i}  ≤  m  <  \\frac{3B+rN}{s\_i}$$

Eve doesn’t know \\(r\\) outright, but they can solve for the possible range of \\(r\\) by considering the current interval \\(\[a,b\]\\) for \\(m\\). Essentially, Eve uses the previous bounds on \\(m\\) to guess which \\(r\\) would make the inequality true, then updates the new bounds \\(\[a, b\]\\) as the intersection of all possible solutions for \\(m\\). This dramatically shrinks the interval.

Each oracle query yields such a constraint. Eventually, the interval \\(\[a,b\]\\) collapses to a single value, \\(\[a,a\]\\). Now, Eve can find the plaintext using:

$$m = (a × s\_i^{-1}) ~ mod N$$

At that point, Eve has recovered the entire padded plaintext \\(m\\), and by stripping off the padding, the original message itself.

The sequence diagram below consolidates our learning of the attack:

![Sequence Diagram: The Bleichenbacher’s Attack](https://cdn.hashnode.com/res/hashnode/image/upload/v1742498318544/6e297215-ca3e-451d-9574-117c0f8a12cb.png)

The Bleichenbacher attack showed that the format of the padding in PKCS#1 v1.5 leaked just enough info to enable a full private-key operation (decrypting the message) without ever factoring N. The attack leveraged the fact that it’s possible to craft ciphertexts that will decrypt to a valid-looking plaintext without knowing the plaintext​. In essence, PKCS#1 v1.5 padding allowed about \\(1\\) in \\(2^{16}\\) chance (roughly) for a random blob to appear as “valid padding.” That was enough for an adaptive attack to succeed with feasible queries.

This is precisely what later padding designs like OAEP fixed. OAEP’s design makes such random valid ciphertexts astronomically unlikely (plaintext aware). We will learn about RSA-OAEP in the next sections.

To mitigate the Bleichenbacher attack without immediately changing the padding scheme, practitioners implemented defensive measures. For example, TLS should treat all decryption failures the same way (so an attacker can’t distinguish padding vs. other errors), and servers would generate a fake premaster secret on padding failure to continue the handshake and avoid timing leaks. Nonetheless, the safest course has been to deprecate PKCS#1 v1.5 encryption in favor of schemes like RSA-OAEP.[​][42]

## Optimal Asymmetric Encryption Padding (OAEP)

By the end of 1995, Bellare and Rogaway proposed Optimal Asymmetric Encryption Padding (OAEP) with the goal of achieving provable security. This padding aimed to make RSA encryption resistant not just to passive attacks but also to adaptive chosen-ciphertext attacks. In other words, even if an attacker can trick a system into decrypting chosen ciphertexts (as an “oracle”), they should learn nothing useful about the plaintext. OAEP was subsequently standardized in PKCS#1 v2.0 (published as RFC 2437 in 1998) and later versions.

Compared to PKCS#1 v1.5, OAEP has a more complex encoding that uses hash functions and a mask generation function (MGF) to thoroughly randomize the plaintext before RSA encryption, providing stronger guarantees.

OAEP’s design can be viewed as a two-layer Feistel-like network using a random seed. It takes the input message and randomizes it in a way that is reversible only with the correct seed. The scheme was proven plaintext-aware in the random oracle model which means that an adversary cannot concoct a valid ciphertext without knowing the corresponding plaintext. If an attacker tries to forge or tamper with ciphertexts, they almost surely produce an _invalid_ padding that will be rejected. This property directly counters padding-oracle attacks.

OAEP (with a proper hash/MGF) is semantically secure against adaptive chosen ciphertext attacks, assuming RSA is hard to invert and treating the hash functions as random oracles. Unlike PKCS#1 v1.5, which lacked a formal proof, OAEP comes with a proof sketch that breaking RSA-OAEP is as hard as breaking RSA itself.

In practice, this means OAEP drastically reduces the risk of any padding oracle: an attacker can no longer easily find ciphertexts that slip through the padding check except by brute force which has a \\(2^{-hLen\*8}\\) success probability. For example, the success probability with SHA-1 would be \\(2^{-160}\\).

The block diagram below is a visual representation of the OAEP encoding schema:

![Optimal Asymmetric Encryption Padding](https://cdn.hashnode.com/res/hashnode/image/upload/v1742663541136/1c418939-80f6-45ea-8667-cacdc5cdab2b.png)

Let’s understand what these mathematical notions mean and the workings of RSA-OEAP, up next.

### The Mathematics Behind OAEP

Optimal Asymmetric Encryption Padding requires a hash function for two operations we will discuss in this section. We will choose SHA-1 as a hash function in OAEP and \\(hLen\\) denotes the length in octets of the hash function output. We will later demonstrate why even MD5 or SHA-1 is a secure choice for OAEP even if it is not collision resistant.

Before we dive into the mathematics, let’s recap a few notations and define the main pieces we’ll be using:

In RSA, \\(N\\)is the modulus, and \\(k\\) is the size of \\(N\\) in _bytes_. For a \\(2048\\)-bit modulus, \\(k=256\\) bytes.  
\\(M \\) is the message or plaintext to be encrypted. This plaintext must be short enough to fit into the padded block (at most \\(k−2⋅hLen−2\\) bytes). In our notation, \\(Hash\\) refers to the cryptographic hash function (for example, SHA-1, SHA-256) of output length \\(hLen\\). For example: If using SHA-1, \\(hLen=20\\) bytes.

We will also use an optional string associated with the message (often empty). This is the Label \\(L\\). If this label is empty, its hash is a fixed value. (For example: the SHA-1 of an empty string).

The hash of this label \\(L\\) is represented by \\(lHash\\), where \\(lHash=Hash(L)\\). As mentioned earlier, if \\(L\\) is empty, \\(lHash\\) is simply \\(Hash('')\\). This means that in any case \\(lHash\\) will hold a value.

We will also use a Mask Generation Function, \\(MGF\\), which is often mentioned as \\(MGF1\\). This function takes an input (seed or masked data) and produces an output of a specified length by iterating the underlying hash function. We’ll write \\(MGF(input,length)\\) to indicate “generate a mask of \\(length\\) bytes from \\(input\\)”.

Now that you are familiar with all the necessary notations, we are ready to begin the encoding step.

#### Step 1: Constructing the Data Block (DB)

We will compute \\(lHash=Hash(L)\\). If \\(L\\) is empty, \\(lHash\\) is a constant (For example, the SHA-1 of the empty string).

Form the padding string \\(PS\\), the length of \\(PS\\) is chosen so that the entire block \\(DB\\) has length \\((k−hLen−1)\\) bytes. Numerically, \\(PS\\) has \\((k−mLen−2⋅hLen−2)\\) bytes of \\(0x00\\), where \\(mLen\\) is the length of the message \\(M\\).

Now we simply concatenate the blocks to generate the octet string for the Data Block (\\(DB\\)):

$$DB=lHash~∣∣~PS~∣∣~0x01~∣∣~M$$

Here the single byte \\(0x01\\) acts as a delimiter which marks where the zero padding ends and the actual message \\(M\\) begins. \\(DB\\) ends up being \\((k−hLen−1)\\) bytes.

#### Step 2: Generating a Mask for the Data Block

First, we pick a random string called \\(seed\\) of length \\(hLen\\) bytes. For example, when using SHA-1 where \\(hLen=20\\), then we say that the seed consists of \\(20\\) random bytes.

Now we use the mask generation function, \\(MGF\\), on the \\(seed\\) to create a mask the same length as \\(DB\\):

$$dbMask=MGF(seed,k−hLen−1)$$

The idea is to spread the randomness of the seed across the entire \\(DB\\).

#### Step 3: Mask the Data Block

Now, we will Combine \\(DB\\) and \\(dbMask\\) with the bitwise \\(XOR\\) operation:

$$maskedDB=DB \\oplus dbMask$$

This step “scrambles” \\(DB\\) with the random seed.

#### Step 4: Generate a Mask for the Seed

Next, we will produce a mask for the seed itself, based on \\(maskedDB\\):

$$seedMask=MGF(maskedDB,hLen)$$

This step simply ensures that the seed is not left in the clear.

#### Step 5: Mask the Seed

Now we will combine the original seed and the new mask with an \\(XOR\\) operation:

$$maskedSeed=seed \\oplus seedMask$$

Now the seed is also “scrambled” by the data block.

#### Step 6: Form the Final Encoded Message (EM)

We are now ready to build our final block. Simply concatenate everything into a \\(k\\)-byte string:

$$EM=0x00~∣∣~maskedSeed~∣∣~maskedDB$$

The leading \\(0x00\\) byte ensures that when \\(EM\\) is interpreted as an integer, it’s less than the RSA modulus \\(N\\). At this point, \\(EM\\) is your OAEP-padded message of length \\(k\\).

#### Step 7: Covert concatenated String to Integer

Remember from our discussion before on PKCS#1v1.5 that RSA cannot directly operate on this concatenated string of bytes. We need to convert the \\(EM\\) block to a non-negative integer using the OS2IP formula:

$$x = \\sum\_{i=1}^{k} 2^{8(k - i)} \\,\\mathrm{EB}\_i$$

#### Step 8: Perform RSA Encryption

Now that we have the encoded message (\\(EM\\)) as an integer \\(x\\), we are ready to perform RSA guided by the formula:

$$C =x^e \\bmod N$$

where \\((e,N)\\) is the public key. The thus computed \\(C\\) is our ciphertext generated using RSA-OAEP.

When decrypting, the process is reversed: the recipient uses their private key \\(d\\) to compute \\(m = c^d \\bmod N\\), recovers the \\(EM\\), then splits it into the \\(0x00\\), \\(maskedSeed\\), and \\(maskedDB\\), and uses the same \\(MGF\\) and hash function to unravel the \\(XORs\\) in reverse order​. Finally, they check that the recovered \\(lHash'\\) matches the expected hash and that the block contains the proper structure​ (\\(...||0x01||...\\)).

If any check fails, the padding is invalid. Only if everything checks out is the message \\(M\\) returned. The result is that an invalid ciphertext will almost always be detected and rejected without giving an attacker any useful information.

By design, OAEP effectively foiled the padding oracle problem. The chance that a random guess produces a valid OAEP encoding is negligible: on the order of \\(2^{-hLen\*8}\\)). In fact, Daniel Bleichenbacher (after breaking PKCS#1 v1.5) advocated for exactly such a “plaintext-aware” padding where forging a valid padding is infeasible.

## **Why SHA-1 or MD5 Are Safe in RSA-OAEP**

Earlier in the section above, we mentioned that we’d be using SHA-1 for our mathematical formulation and examples. When you see SHA-1 or MD5 used in the context of RSA-OAEP, don’t let the fact that these hash functions are considered broken for collision resistance alarm you. If you notice carefully in the previous section, the hash functions serve two very specific roles that do not rely on their collision resistance. Let’s break them down one by one:

### **Label Hashing**

The hash function is used to compute a fixed-length hash of an optional label \\(L\\) (often empty).

Now let’s see why is this safe in the context. This hash, called \\(lHash\\), acts as a domain separator. Its job is simply to ensure that the label is correctly associated with the ciphertext during decryption. As long as the label is chosen wisely (that is, not built from adversary-controlled parts), collision resistance isn’t critical here.

### **Mask Generation Function (MGF1)**

The hash function is also used inside \\(MGF1\\) to create a pseudorandom mask. This mask is applied both to the data block \\(DB\\) and to the random seed used in the encoding process.

In this context, the hash function is treated as a random oracle. The job is to spread the randomness of the seed across a larger block of data. For this purpose, properties like length extension or collision resistance are not relevant. What matters is that the output appears random, and even SHA-1 or MD5 can deliver that when used in this controlled, fixed-input scenario.

## Adoption in Cryptographic Libraries (PKCS#1 v1.5 vs OAEP)

After the Bleichenbacher attack, standards and libraries migrated to OAEP or at least added support for it, while treating PKCS#1 v1.5 as a legacy option. Modern cryptographic libraries and protocols reflect these lessons.

In 1998, the RSA standard was updated. PKCS#1 v2.0 introduced RSAES-OAEP as the new recommended encryption scheme, and by PKCS#1 v2.1 and v2.2 (RFC 3447 and RFC 8017), OAEP is required for new applications, with PKCS#1 v1.5 included only for backward compatibility.

OpenSSL discourages users from using PKCS#1 v1.5 as it leaks information that can potentially be used to mount a Bleichenbacher padding oracle attack \[10\]. The documentation clearly mentions that it is highly recommended to use `RSA_PKCS1_OAEP_PADDING` in new applications.

The Python cryptography library (PyCA cryptography) also asks developers to use OAEP for encryption instead of PKCS#1 v1.5 \[11\].

After Bleichenbacher’s 1998 attack, it was impractical to instantly replace PKCS#1 v1.5 everywhere. Instead, protocol designers issued countermeasures.

TLS, for example, responded by changing the error handling: the server would not reveal a padding failure distinctly. It would generate a fake premaster secret and proceed to prevent timing clues, and always return a generic handshake failure at a later stage, making it harder for the attacker to distinguish why decryption failed.

These countermeasures reduced the oracle’s fidelity but were tricky to get right across different implementations. In fact, not everyone got it right – the Bleichenbacher attack continued to resurface in various forms when implementations made mistakes in error handling.

In 2018, researchers discovered the ROBOT attack (Return Of Bleichenbacher’s Oracle Threat): several TLS implementations had subtle bugs that recreated a padding oracle, allowing the attack to succeed 19 years later. The ROBOT paper showed that even with countermeasure guidelines, the complexity of uniformly handling errors led to slip-ups in popular products.

This underscores that patching an insecure scheme is often error-prone – a design that is secure by construction (like OAEP) is preferable.

PKCS#1 v1.5 continues to exist because of these patchwork security measures and the fact that it cannot be abruptly removed from all existing systems. It is generally regarded as "legacy" or maintained "for compatibility" purposes. The collective wisdom is clear: use OAEP for RSA encryption whenever possible.

## Enhancing Digital Signatures: The Transition to PSS

Now that you understand how OAEP transformed RSA encryption by mitigating vulnerabilities in deterministic padding, it’s time to turn our attention to RSA digital signatures – a critical function for ensuring message integrity and authenticity.

Early RSA signature schemes suffered from similar problems as raw encryption: their deterministic nature made them prone to forgery and replay attacks. This vulnerability paved the way for an improvement: the Probabilistic Signature Scheme (PSS).

Before we dive into PSS itself, let’s quickly understand the pain points with early RSA signatures.

### Problems with Early RSA Signature Schemes

Traditional RSA signatures were generated by simply applying the RSA decryption function on a message digest (often with minimal formatting):

$$s=m^d \\bmod N$$

where \\(m\\) is the hash (or encoded hash) of the message. This approach was deterministic which meant that each time the same message was signed, the exact signature was produced. Such determinism had two major drawbacks:

1.  #### Predictability and Replay
    
    Since the signature for a given message was always identical, an attacker could replay a captured signature with impunity or forge signatures if they could deduce patterns in the signature scheme.
    
2.  #### Forgery Risks
    
    In a deterministic setting, if an attacker finds any structure or mathematical relationship in the signature, they might be able to forge a valid signature for a new message. In certain scenarios, weak formatting could allow an adversary to create a “signature transformation” that produces a valid signature without having access to the private key.
    

These issues highlighted that a signature scheme must be probabilistic to be secure against adaptive forgery attempts and to ensure non-repudiation. This means that the signer should not be able to repudiate a signature because it is bound to a random value known only at signing time.

### Birth of the Probabilistic Signature Scheme (PSS)

Towards the end of 1998, Bellare and Rogaway also proposed a scheme to overcome the inherent limitations of deterministic RSA signatures \[12\]. The core idea was to introduce randomness into the signature generation process so that even when signing the same message twice, the resulting signatures would be different. This randomness comes from a salt value and a carefully designed encoding process. The result is a signature method with strong, provable security guarantees.

This randomness prevents attackers from exploiting patterns in the signature process. The probabilistic Signature Scheme was designed to be provably secure in the random oracle model, meaning that forging a signature would be as hard as breaking RSA itself under certain assumptions \[13\].

The block diagram below is a visual representation of the PSS encoding schema:

![Probabilistic Signature Scheme](https://cdn.hashnode.com/res/hashnode/image/upload/v1742669558156/8137f535-deb7-4437-887a-53cf7a412089.png)

Let’s understand what these mathematical notions mean as well as the workings of RSA-PSS, up next.

### The Mathematics Behind PSS

Before diving into the mechanics of RSA-PSS, it’s helpful to define the notations and terms you’ll see in the steps ahead.

In RSA, \\(N\\)is the modulus, a large integer that is the product of two primes. \\(k\\) is the length of \\(N\\) in _bytes_. For an \\(2048\\)-bit key, \\(k=256\\) bytes.

\\(M\\)represents the message data or document you want to sign. In RSA-PSS, you’ll typically first compute a hash of \\(M\\). \\(Hash\\) refers to a cryptographic hash function (for example, SHA-256) that maps data to a fixed-size output. The output length is denoted \\(hLen\\). For SHA-256, \\(hLen=32\\) bytes.

We will use a salt, \\(S\\), randomly generated string of fixed length (often the same as \\(hLen\\)). This randomness is essential in ensuring that each signature is unique, even for the same message.

\\(H\\) or \\(mHash\\) is the hash of the message \\(M\\)and \\(H'\\) is a secondary hash that includes both \\(M\\) and the salt \\(S\\). This appears in the PSS encoding step.

The Mask Generation Function, \\(MGF\\), is a function that uses the hash internally to produce a pseudorandom output of arbitrary length. In PSS, it is used to “mask” parts of the data block so that the signature is hard to forge.

A fixed byte, \\(0xbc\\) (in hex) is appended at the end of the encoded message to mark the boundary of the PSS structure. This serves as a simple integrity check during decoding. After a successful encoding we receive an encoded message \\(EM\\) which is an octet string of length \\(emLen = \\left\\lceil{\\frac{emBits}{8}}\\right\\rceil\\).

Now that you are familiar with all the necessary notations, we are ready to begin the encoding step.

#### Step 1: Message Hashing and Salt Generation

We compute the hash of the message as \\(H~( mHash)=Hash(M)\\) where \\(M\\) is our message. We will also create a random salt \\(S\\) (of fixed length, say 20 bytes if you use SHA-1).

#### Step 2: Encoding the Hash with the Salt (PSS-Encode)

We will construct a Data Block, \\(DB\\), by combining a padding with the hash and the salt. The padding is a sequence of \\(0\\)’s that fills space and ensures a fixed length. Mathematically:

$$M' = (0x)~00 ~00 ~00 ~00 ~00 ~00 ~00 ~00 ~||~ mHash ~||~ salt$$

Now we compute the Hash of this block as \\(H' = Hash(M')\\). We will generate another octet string \\(PS\\) and concatenate it with the salt and \\(0x01\\) as a delimiter:

$$DB = PS ~||~ 0x01 ~||~ salt$$

Note that DB is an octet string of length \\(emLen - hLen - 1\\). The mask that you see in the visual representation above must be of this length. Mathematically:

$$dbMask = MGF(H, emLen - hLen - 1)$$

We will then apply this mask on the \\(DB\\) block using an \\(XOR\\) operation to produce our \\(maskedDB\\):

$$maskedDB = DB \\oplus dbMask$$

Recollect that \\(emLen\\) is the intended length of the Encoded Message \\(EM\\) and \\(hLen\\) is the length of the hash output. Now we append a fixed trailer field \\(0xbc\\) and produce the encoded message in its octet string representation:

$$EM = maskedDB ~||~ H ~||~ 0xbc$$

This encoding process ensures that both the salt and the hash are mixed together in a non-reversible, pseudorandom manner. The randomness from the salt is “spread” over the data block by the \\(MGF\\), making it extremely difficult for any adversary to manipulate the signature.

#### Step 3: RSA Signature Generation

Once you have the encoded message \\(EM\\), the RSA signature is produced by using the RSA private key. First, convert the Octet String to its integer representation using the OS2IP method we’ve discussed before. Then apply the RSA Private Key Operation:

$$s=m^d \\bmod N$$

where \\(d\\) is the private exponent and \\(N\\) is the RSA modulus.

#### Step 4: Signature Verification

At the receiver end, when any recipient wants to verify a signature, they reverse the process:

$$m′= s^e \\bmod N$$

and convert \\(m'\\) back to an encoded message \\(EM\\). The verifier then extracts the components \\((MaskedDB, H′, trailer)\\) and recomputes \\(H'\\) from the message and salt. The verifier confirms that the hash and salt embedded in \\(EM\\) match what is expected. If everything checks out, the signature is valid.

## **The Road Ahead: Assessing RSA’s Long-Term Viability**

In 1994, Peter Shor’s algorithm \[14\], demonstrated that a quantum computer can factor large integers in polynomial time, thereby efficiently breaking RSA’s underlying hard problem – the difficulty of factoring \\(N = p \\times q\\).

Although experimental quantum computers have made progress, they remain far from having the number of stable qubits required to break RSA keys of practical sizes (2048 or 4096 bits).

In anticipation of large-scale quantum computers, the cryptographic community is actively developing and standardizing algorithms believed to be resistant to quantum attacks. These include lattice-based schemes (such as CRYSTALS-Kyber and NTRU), code-based cryptography (such as the McEliece cryptosystem), hash-based signatures (such as XMSS), and multivariate polynomial cryptosystems.

It’s important to note that while OAEP and PSS improve the security of RSA against classical attacks, they do not protect RSA from quantum attacks. In a post-quantum world, even the most secure classical padding will not prevent a quantum computer from breaking RSA using Shor’s algorithm.

In the near term, RSA remains in widespread use and, when implemented with padding schemes such as OAEP and PSS, continues to provide strong security against classical adversaries. But looking ahead, it’s expected that organizations will gradually migrate to post-quantum algorithms as they mature and become standardized.

## References

\[1\] FIPS 186-5: [Digital Signature Standard (DSS)][43]

\[2\] RFC 8017 PKCS #1: [RSA Cryptography Specifications][44]

\[3\] [Lagrange's theorem][45]

\[4\] Ronald L. Rivest, Robert D. Silverman: [Are Strong Primes Needed for RSA][46]?

\[5\] [pyca/cryptography][47]

\[6\] [OpenSSL Github][48]: `rsa_chk.c`

\[7\] RFC 2313: [PKCS #1: RSA Encryption][49]

\[8 \] Daniel Bleichenbacher: [Chosen Ciphertext Attacks Against Protocols Based on the RSA Encryption Standard PKCS #1][50]

\[9\] RFC 8017: [PKCS #1 RSA Cryptography Specifications Version 2.2][51]

\[10\] RSA\_public\_encrypt: [Warnings][52]

\[11\] [pyca/PKCS1v1][53]

\[12\] [Probabilistic signature scheme][54]

\[13\] RFC 8017: [RSASSA-PSS][55]

\[14\] [Algorithms for quantum computation][56]: discrete logarithms and factoring

[1]: #heading-prerequisites
[2]: #heading-the-alice-bob-paradigm
[3]: #heading-the-birth-of-the-rsa-cryptosystem
[4]: #heading-prime-numbers-and-composite-moduli
[5]: #heading-the-euler-totient-function
[6]: #heading-computing-the-keys
[7]: #heading-rsa-operations
[8]: #heading-encryption
[9]: #heading-decryption
[10]: #heading-digital-signatures
[11]: #heading-issues-with-eulers-totient-function-in-rsa
[12]: #heading-the-carmichael-function
[13]: #heading-mathematical-implication-of-the-carmichael-function
[14]: #heading-the-carmichael-function-in-modern-implementations
[15]: #heading-issues-with-raw-rsa
[16]: #heading-exploiting-textbook-rsas-determinism-and-malleability
[17]: #heading-key-generation-setup
[18]: #heading-encryption-process
[19]: #heading-determinism-exploit-ciphertext-guessing-attack
[20]: #heading-malleability-exploit-ciphertext-manipulation-attack
[21]: #heading-low-exponent-attacks
[22]: #heading-hastads-broadcast-attack-low-exponent-meets-multiple-recipients
[23]: #heading-introduction-to-padding-schemes-in-rsa
[24]: #heading-public-key-cryptography-standards-pkcs1-v15
[25]: #heading-the-mathematics-behind-pkcs1-v15
[26]: #heading-the-bleichenbacher-attack
[27]: #heading-optimal-asymmetric-encryption-padding-oaep
[28]: #heading-the-mathematics-behind-oaep
[29]: #heading-why-sha-1-or-md5-are-safe-in-rsa-oaep
[30]: #heading-label-hashing
[31]: #heading-mask-generation-function-mgf1
[32]: #heading-adoption-in-cryptographic-libraries-pkcs1-v15-vs-oaep
[33]: #heading-enhancing-digital-signatures-the-transition-to-pss
[34]: #heading-problems-with-early-rsa-signature-schemes
[35]: #heading-birth-of-the-probabilistic-signature-scheme-pss
[36]: #heading-the-mathematics-behind-pss
[37]: #heading-the-road-ahead-assessing-rsas-long-term-viability
[38]: #heading-references
[39]: https://www.youtube.com/watch?v=Mt9v7-xBuaA
[40]: https://www.youtube.com/watch?v=Mt9v7-xBuaA
[41]: https://www.youtube.com/watch?v=Mt9v7-xBuaA
[42]: https://archiv.infsec.ethz.ch/education/fs08/secsem/bleichenbacher98.pdf#:~:text=plaintext%20is%20PKCS%20conforming,chosen%20ciphertexts%3B%20thus%2C%20we%20show
[43]: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf
[44]: https://www.rfc-editor.org/rfc/rfc8017.html
[45]: https://en.wikipedia.org/wiki/Lagrange%27s_theorem_\(number_theory\)
[46]: https://people.csail.mit.edu/rivest/pubs/pubs/RS01.version-1999-11-22.pdf
[47]: https://cryptography.io/en/latest/hazmat/primitives/asymmetric/rsa/
[48]: https://github.com/openssl/openssl/blob/85cabd94958303859b1551364a609d4ff40b67a5/crypto/rsa/rsa_chk.c
[49]: https://www.rfc-editor.org/rfc/rfc2313.html
[50]: https://archiv.infsec.ethz.ch/education/fs08/secsem/bleichenbacher98.pdf
[51]: https://www.rfc-editor.org/rfc/rfc8017#section-7.1
[52]: https://docs.openssl.org/3.5/man3/RSA_public_encrypt/#warnings
[53]: https://cryptography.io/en/latest/hazmat/primitives/asymmetric/rsa/#cryptography.hazmat.primitives.asymmetric.padding.PKCS1v15
[54]: https://en.wikipedia.org/wiki/Probabilistic_signature_scheme
[55]: https://www.rfc-editor.org/rfc/rfc8017#section-8.1
[56]: https://ieeexplore.ieee.org/abstract/document/365700/