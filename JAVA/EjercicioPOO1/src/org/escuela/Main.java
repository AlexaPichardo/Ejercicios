package org.escuela;

import org.escuela.entidades.Courses;
import org.escuela.entidades.Student;

public class Main {

    public static void main(String[] args) {

        // Creación de objetos de tipo Student
        Student s1 = new Student("Carlos", "Mendoza", 2023, 85, 3);
        Student s2 = new Student("Valeria", "Torres", 2021, 94, 4);
        Student s3 = new Student("Luis", "Hernández", 2024, 58, 1);
        Student s4 = new Student("Fernanda", "Gómez", 2022, 67, 2);
        Student s5 = new Student("Diego", "Ramírez", 2020, 91, 4);
        Student s6 = new Student("Camila", "Vázquez", 2023, 45, 2);
        Student s7 = new Student("Mateo", "Castillo", 2024, 78, 1);
        Student s8 = new Student("Sofia", "Morales", 2021, 88, 3);
        Student s9 = new Student("Javier", "Reyes", 2022, 52, 2);
        Student s10 = new Student("Andrea", "Navarro", 2023, 96, 3);

        // Arreglo de estudiantes para el enrolamiento masivo
        Student[] students = {s1, s2, s3, s4, s5, s6, s7};

        // Cursos
        Courses c1 = new Courses("Estructuras de Datos", "Dra. Grace Hopper", 2);
        Courses c2 = new Courses("Bases de Datos", "Prof. Edgar Codd", 3);
        Courses c3 = new Courses("Desarrollo Web", "Ing. Tim Berners-Lee", 2);
        Courses c4 = new Courses("Inteligencia Artificial", "Dra. Fei-Fei Li", 4);
        Courses c5 = new Courses("Ingeniería de Software", "Prof. Margaret Hamilton", 3);
        Courses c6 = new Courses("Sistemas Operativos", "Dr. Linus Torvalds", 3);
        Courses c7 = new Courses("Redes de Computadoras", "Ing. Vint Cerf", 4);
        Courses c8 = new Courses("Ciberseguridad", "Dra. Dorothy Denning", 4);
        Courses c9 = new Courses("Computación en la Nube", "Dr. Werner Vogels", 3);
        Courses c10 = new Courses("Algoritmos Avanzados", "Prof. Donald Knuth", 4);

        // Pruebas de métodos de Student
        System.out.println("\n========== Student methods");
        s7.printFullName();
        System.out.println("Estudiante 7 aprobado?: " + s7.isApproved());
        s7.changeYearIfApproved();
        System.out.println("=============================");

        // Pruebas de métodos de Courses
        System.out.println("\n========== Courses methods");
        c5.enroll(s2);
        c5.enroll(s3);
        c5.enroll(s4);
        c5.enroll(s5);

        System.out.println("Estudiantes en el curso 5: " + c5.countStudents());
        c5.unEnroll(s2);
        c5.unEnroll(s3);

        System.out.println("Estudiantes restantes en el curso 5: " + c5.countStudents());
        System.out.println("Calificación más alta: " + c5.bestGrade());

        // Enrolamiento por arreglo
        c5.enroll(students);
        System.out.println("Estudiantes en el curso 5 tras inscripción masiva: " + c5.countStudents());

        // Desafíos
        System.out.println("Promedio del curso: " + c5.average());
        c5.isAboveAverage();
        c5.ranking();

    } // main
} // class Main
