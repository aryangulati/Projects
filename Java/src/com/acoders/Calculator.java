package com.acoders;

import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        float n1,n2;
        System.out.println("Enter First Number");
        Scanner scan =new Scanner(System.in);
        n1=scan.nextFloat();
        System.out.println(n1);
        System.out.println("Enter Second Number");
        Scanner scan =new Scanner(System.in);
        n2=scan.nextFloat();
        System.out.println(n2);

        String comm ="Enter 0 for Addition ,1 for Subtraction,3 for division,4 for multiplaction";
        System.out.println(comm);


        int input = scan.nextInt();
        switch (input){
            case 0:
                System.out.println("Adding these numbers");
                System.out.print("The result is: ");
                System.out.println(n1 + n2);
                break;

            case 1:
                System.out.println("Subtracting these numbers");
                System.out.print("The result is: ");
                System.out.println(n1 - n2);
                break;

            case 2:
                System.out.println("Multiplying these numbers");
                System.out.print("The result is: ");
                System.out.println(n1 * n2);
                break;

            case 3:
                System.out.println("Dividing these numbers");
                System.out.print("The result is: ");
                System.out.println(n1 / n2);
                break;

            default:
                System.out.println("Invalid input");

        }



    }
}
