package com.acoders;

import java.util.Scanner;

public class notmain {
    public static void main(String[] args) {
        System.out.println("hello world");
        //If Else conditionals
        Scanner scan =new Scanner(System.in);
        System.out.println("Enter your age");
        int age  =scan.nextInt();

        if (age>20){
            System.out.println("you are teenager ");


        }
        else if(age>5){
            System.out.println("your are not a kid");
        }

        else{
            System.out.println("you are a kid");

        }

        switch (age){
            case 12:
                System.out.println("You are 12 year");
                break;
            case 56:
                System.out.println("56 year old");
                break;
            default:
                System.out.println();

        }


        Scanner scan =new Scanner(System.in);
        System.out.println("Enter your day number");
        int daynumber  =scan.nextInt();

        switch





    }
}
