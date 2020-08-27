package com.acoders;// package has classes


import java.sql.SQLOutput;
import java.util.Scanner;



public class Main { //class has many method to run code
    //class name is same as program name
    public static void main(String[] args) {
        // write your code here
        System.out.println("Hello World");
        //itelliJ feature press Sout +Tab Shortcut of above
     /* Variables
     Multi line comment

     Variables === container which store data values
     int ,float,char,bool,str
     Declaring Variable
     Syntax: <Datatype> <VariableName> = <Value>;


      */
        int b=27;
        String  a="Hello Aryan";
        float c=4748.47484f;
        boolean isCoder= true;
        System.out.println(isCoder);
        System.out.println(b);
        System.out.println(a);
        System.out.println(c);


        //multivariable assignment
        int d=39,x=56,y=9;
        System.out.println(d);

        /* Naming of variable
        numbers,alphabets,special char(can begin with these too)

         */
        /* Datatype in Java
        Primitive
        [byte, short(2 byte ), int (4 byte), long (8 byte),
        float(4 byte),double (8 byte),boolean(1 bit),char (2 byte)]

         SIZE                  VALUE
        1 byte ( 8 bits )      -128 to 127
        2 byte ( 16 bits )     -32, 768 to 32, 767 (inclusive)
        4 byte ( 32 bits )     -2, 147, 483, 648 to 2, 147, 483, 647 (inclusive)
        8 byte ( 64 bits )     -9, 223, 372, 036, 854, 775, 808 to 9, 223, 372, 036, 854, 775, 807(inclusive)
        so on ....

        and Non Primitive (string ,array , etc) - programmmer made

         */

        byte v= 56; // v value lie in b/w -128 to 127
        double d1= 345.25432d;
        char grade  = 'A';
        System.out.println(grade);
        System.out.println(d1);
        System.out.println(v);


        //non primitive
        String h="aryan";
        String g="aryan";
        System.out.println(h.compareTo(g));// println gives new line and print just print

        // Operator in Java
        int n1 =55 ,n2=66;
        System.out.println("the val of n1 +n2 is :");
        //System.out.println("the val of n1 +n2 is :");// ctrl + D line replicate
        System.out.println(n1+n2);
        System.out.println(n1*n2);
        System.out.println(n1-n2);
        System.out.println(n1/n2);
        System.out.println(n1++);
        System.out.println(++n1);
        System.out.println(n1--);
        System.out.println(--n1);
        System.out.println(--n2);


        System.out.println("after changing one to float");




        float n3 =55;
        System.out.println("the val of n1 +n2 is :");
        //System.out.println("the val of n1 +n2 is :");// ctrl + D line replicate
        System.out.println(n3+n2);
        System.out.println(n3*n2);
        System.out.println(n3-n2);
        System.out.println(n3/n2);
        System.out.println(n3++);
        System.out.println(++n3);
        System.out.println(n3--);
        System.out.println(--n3);
        System.out.println(--n3);


        //taking user input in java
        //automatically imports the library
        Scanner scan = new Scanner(System.in);
        //making a scanner class object and taking input from system
        System.out.println("Enter Input");
        String input = scan.nextLine(); // it wait for nextline
        // object made from it (scan) read the nextline in form of string

        System.out.println(input);


        Scanner scan1 = new Scanner(System.in);
        //making a scanner class object and taking input from system
        System.out.println("Enter Input");
        String input1 = scan1.next(); // it waits for next spaces
        //we can to enter int/ other value like string
        // object made from it (scan) read the nextline in form of string

        System.out.println(input1);


        Scanner scan2 = new Scanner(System.in);
        //making a scanner class object and taking input from system
        System.out.println("Enter Input");
        int input2 = scan2.nextInt(); // it waits for next spaces
        //we can to enter int/ other value like string
        // object made from it (scan) read the nextline in form of string

        System.out.println(input2);


        //STRING
        String name="Aryan" +" Gulati";
        String work = " Code in Java";
        System.out.println(name);
        //java string methods
        System.out.println(name.length());
        System.out.println(name.toUpperCase());
        System.out.println(name.toLowerCase());
        System.out.println(name.length());
        System.out.println(name.contains("ati"));
        System.out.println(name.charAt(3));
        System.out.println(name.indexOf("ary"));
//        a3=name.endsWith("mti");
//        System.out.println(a3);
        System.out.println("my name is "+ name +"and I love \" to "+work);
        System.out.println("my name is "+ name +"and I love \\ \" to "+work);
        System.out.println("my name is "+ name +"and I love \t to "+work);
        System.out.println("my name is "+ name +"and I love \n to "+work);



        //Math library in Java
        //math class function

        int num1=4 ,num2=8;
        System.out.println(Math.max(num1,num2));
        System.out.println(Math.min(num1,num2));
        System.out.println(Math.random());
        System.out.println(Math.abs(-36));
        System.out.println(Math.abs(6));
        System.out.println(Math.sqrt(144));

        //generating random number between some number or
        //genrating b/w 1,9
        System.out.println(1+(9-1)*Math.random());
        System.out.println(1+(9-1)*Math.random());
        System.out.println(1+(9-1)*Math.random());
        System.out.println(1+(9-1)*Math.random());
        System.out.println(1+(9-1)*Math.random());
        System.out.println(1+(9-1)*Math.random());
        System.out.println(1+(9-1)*Math.random());


        //If-else Condition






















    }
}
