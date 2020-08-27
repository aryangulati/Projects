package com.acoders;

import java.util.Scanner;

public class notmain {

    static  float multiply(int a5,int b5){
        return a5*b5;

    }

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


        Scanner scan1 =new Scanner(System.in);
        System.out.println("Enter your day number");
        int daynumber  =scan1.nextInt();

        switch(daynumber){
            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            case 3:
                System.out.println("Wednesday");
                break;

            case 4:
                System.out.println("Thursday");
                break;

            case 5:
                System.out.println("FRiday");
                break;

            case 6:
                System.out.println("Saturday");
                break;

            case 7:
                System.out.println("Sunday");
                break;
        }

        //loops
        int i=0;
        while(i<100){
            System.out.println(i);
            i++;
        }
        //do while loops not used generally

        //for loop
        for (int j=0;j<10;j++){
            //System.out.println(i);
            //break;
            System.out.println(i);

            //continue in loop
            // break;

        }

        //Arrays
        int [] marks={1,2,3,4,5};
        System.out.println(marks[2]);
        marks[3]=67;
        System.out.println(marks[2]);
        System.out.println(marks[3]);

        for(int k=0;k< marks.length;k++){
            System.out.println(marks[k]);

        }

        // for each loop
        System.out.println("this is for each loop");

        for(int val:marks){
            System.out.println(val);
        }

        // Matrix
        int[][] matrix ={{1,2,3},
                         {4,5,6}};
        System.out.println(matrix[0][1]);


        //for each loop
        String [] cars ={"BMW","AUDI","Austinmartin","Mustang","Porsche"};
        for(String val : cars ){
            System.out.println(val);
        }

        // try and catch
        try{
            System.out.println(cars[5]);


        }

        catch (Exception e){
            System.out.println(e);
        }
        System.out.println("Innocent line");

        System.out.println(multiply(10,5));


















    }
}
