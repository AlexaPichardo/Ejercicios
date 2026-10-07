package org.escuela.entidades;

public class Student {

    String firstName;
    String lastName;
    int registration;
    int grade;
    int year;

    // Constructor 1: Recibe todos los parámetros y convierte nombres a mayúsculas
    public Student(String firstName, String lastName, int registration, int grade, int year) {
        this.firstName = firstName.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.registration = registration;
        this.grade = grade;
        this.year = year;
    }

    // Constructor 2: Asigna año por defecto (1)
    public Student(String firstName, String lastName, int registration, int grade) {
        this(firstName, lastName, registration, grade, 1);
    }

    // Constructor 3: Asigna matrícula, nota y año por defecto
    public Student(String firstName, String lastName) {
        this(firstName, lastName, 2026, 0, 1);
    }

    // Imprime el nombre completo
    public void printFullName() {
        System.out.println(this.firstName + " " + this.lastName);
    }

    // Retorna si el estudiante está aprobado (nota >= 60)
    public boolean isApproved() {
        return this.grade >= 60;
    }

    // Avanza de año si aprueba e informa el estado
    public int changeYearIfApproved() {
        if (isApproved()) {
            this.year += 1;
            System.out.println("El alumno " + this.firstName + " aprobo " + this.year);
        } else {
            System.out.println("El alumno " + this.firstName + " NO aprobo");
        }
        return this.year;
    }

    @Override
    public String toString() {
        return "Student{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", registration=" + registration +
                ", grade=" + grade +
                ", year=" + year +
                '}';
    }
}

