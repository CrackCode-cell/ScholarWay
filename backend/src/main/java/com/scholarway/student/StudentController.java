package com.scholarway.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(
            StudentService studentService) {

        this.studentService =
                studentService;
    }

    @PostMapping
    public Student createStudent(
            @RequestBody Student student) {

        return studentService
                .createStudent(student);
    }

    @GetMapping("/{studentId}")
    public Student getStudent(
            @PathVariable Long studentId) {

        return studentService
                .getStudent(studentId);
    }
}
