package com.scholarway.student;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    public Student createStudent(
            @RequestBody Student student
    ) {
        return studentService.createStudent(student);
    }

    @GetMapping("/{studentId}")
    public Student getStudent(
            @PathVariable Long studentId
    ) {
        return studentService.getStudent(studentId);
    }

    @PutMapping("/{studentId}")
    public Student updateStudent(
            @PathVariable Long studentId,
            @RequestBody Student student
    ) {
        return studentService.updateStudent(
                studentId,
                student
        );
    }
}
