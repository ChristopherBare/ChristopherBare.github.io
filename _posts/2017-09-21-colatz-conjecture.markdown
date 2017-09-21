---
layout: post
title:  "The Colatz Conjecture"
date:   2017-09-21 01:41:44 -0400
categories: colatz conjecture
---
This may seem like it's coming out of left field, but today I'm going to talk about the Colatz Conjecture. My reasoning for this is because I was helping my friend Joe with his beginning java homework and used the program that I wrote to illustrate how to make a game run in a console.

<h4>The main purpose of the Colatz conjecture is to take any positive integer, and when you apply some recursive logic to it, it will eventually become 1.</h4> I could probably write more on that, but wikipedia is already a thing. 

When I took Calculus 1, the first thing that my teacher Luke Walsh had us do was write out the iterations of the conjecture by hand. This tedium inspired me to write a java program that would do it for any number that you input.

In the couple of hours that it took me to write the code below, I learned that you need to use the java BigInteger class for the program to work properly. BigInteger allows java to handle numbers that are larger than a 32 bit number. That was a good learning experience, which taught me about the limitations of certain languages for performing mathematical calculations.

Just thought I would share my code with you. It's already on my GitHub page which is linked in the footer if you want to see it.

<h3>Colatz Conjecture Code:</h3>

{% highlight java %}
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package colatzconjecture;

import java.util.Scanner;
import java.math.BigInteger;

/**
 *
 * @author christopher1
 */
public class ColatzConjecture {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //Colatz Conjecture Program menu
        System.out.println("Welcome to the Colatz Conjecture Program!");
        System.out.println("The equations used here are:");
        System.out.println("Odd: n/3");
        System.out.println("Even: n*2+1");
        try {
            Calculate();
            Run();

        } catch (Exception e) {
            System.out.println("That's not what we expected. Try again.");
            Run();
        }
    }
    /**
     * Run method keeps program running.
     */
    public static void Run() {
        boolean running = true;
        Scanner sc = new Scanner(System.in);

        while (running) {
            System.out.println("Enter 1 to calculate another number.");
            System.out.println("Or if you would like to exit the program enter 0.");
            long r = sc.nextInt();
            if (r == 0) {
                End();
            } else if (r >= 0) {
                Calculate();
            }
        }
    }
    /**
     * Calculates the given value that the user entered previously.
     */
    public static void Calculate() {
        boolean calculate = true;
        BigInteger n = new BigInteger("0");
        Scanner sc = new Scanner(System.in);
        long counter = 0;
        try {
            while (calculate == true) {
                System.out.println("Please enter an integer of your choosing:");
                n = sc.nextBigInteger();
                BigInteger one = new BigInteger("1");
                BigInteger three;
                BigInteger two;
                BigInteger zero;
                zero = BigInteger.valueOf(0);
                two = BigInteger.valueOf(2);
                three = BigInteger.valueOf(3);
                while (n.compareTo(one) > 0) {
                    if (n.mod(two).equals(BigInteger.ONE)) {
                        BigInteger odd = new BigInteger("0");
                        //odd = n.multiply(three).add(one);
                        odd = n.divide(three);
                        n = odd;
                        System.out.println(odd);
                    } else if (n.mod(two).equals(BigInteger.ZERO)) {
                        BigInteger even = new BigInteger("0");
                        //even = n.divide(two);
                        even = n.multiply(two).add(BigInteger.ONE);
                        n = even;
                        System.out.println(even);
                    }
                    if (n.equals(BigInteger.ONE)) {
                        calculate = false;
                    }
                    counter++;
                }
            }
        } catch (Exception e) {
            System.out.println("That's not a number. Try again.");
        }
        System.out.println("It took: " + counter + " steps to get to 1.");
        counter = 0;
    }

    public static void End() {
        System.exit(0);
    }

  }

{% endhighlight %}


-C
