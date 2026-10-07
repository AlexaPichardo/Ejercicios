package org.escuela.entidades;

import java.util.ArrayList;
import java.util.List;

public class Courses {

    String courseName;
    String professorName;
    int year;
    ArrayList<Student> students;

    // Constructor
    public Courses(String courseName, String professorName, int year) {
        this.courseName = courseName;
        this.professorName = professorName;
        this.year = year;
        this.students = new ArrayList<>();
    }

    // Inscribir un solo estudiante
    public void enroll(Student student) {
        this.students.add(student);
    }

    // Sobrecarga de método: Inscribir un arreglo de estudiantes
    public void enroll(Student[] students) {
        for (Student student : students) {
            this.enroll(student);
        }
    }

    // Dar de baja a un estudiante
    public void unEnroll(Student student) {
        Student tempStudent = student;
        for (Student s : students) {
            if (tempStudent.equals(s)) {
                tempStudent = s;
                break;
            }
        }
        this.students.remove(tempStudent);
    }

    // Contar total de estudiantes
    public int countStudents() {
        return this.students.size();
    }

    // Obtener la calificación más alta
    public int bestGrade() {
        int max = 0;
        for (Student student : this.students) {
            if (student.grade > max) {
                max = student.grade;
            }
        }
        return max;
    }

    // 1. Calcular el promedio de calificaciones del curso
    public double average() {
        if (this.students.isEmpty()) {
            return 0.0;
        }
        double suma = 0;
        for (Student student : this.students) {
            suma += student.grade;
        }
        return suma / this.students.size();
    }

    // 2. Determinar si cada estudiante está por encima del promedio
    public void isAboveAverage() {
        double avg = average();
        System.out.println("=== Estudiantes respecto al promedio (" + avg + ") ===");
        for (Student student : this.students) {
            if (student.grade > avg) {
                System.out.println(student.firstName + " " + student.lastName + " está POR ENCIMA del promedio.");
            } else {
                System.out.println(student.firstName + " " + student.lastName + " está POR DEBAJO o IGUAL al promedio.");
            }
        }
    }

    // 3. Imprimir el ranking de estudiantes ordenados por calificación
    public void ranking() {
        System.out.println("=== Ranking del curso: " + courseName + " ===");
        List<Student> listaOrdenada = new ArrayList<>(this.students);
        listaOrdenada.sort((s1, s2) -> Integer.compare(s2.grade, s1.grade));

        for (int i = 0; i < listaOrdenada.size(); i++) {
            Student s = listaOrdenada.get(i);
            System.out.println((i + 1) + ". " + s.firstName + " " + s.lastName + " - Nota: " + s.grade);
        }
    }
}
