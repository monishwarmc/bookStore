package com.monishwar.backend.controller;

import com.monishwar.backend.model.book;
import com.monishwar.backend.repository.booksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class bookControl {

    @Autowired
    private booksRepo booksRepo;

    @GetMapping("books")
    public List<book> getAll(){
        return booksRepo.getAll();
    }

    @GetMapping("books/{id}")
    public book get(@PathVariable("id") String id){
        return booksRepo.get(id);
    }

    @PostMapping("books")
    public void add(@RequestBody book book){
        booksRepo.add(book);
    }

    @PutMapping("books")
    public void update(@RequestBody book book){
        booksRepo.add(book);
    }

    @DeleteMapping("books/{id}")
    public void delete(@PathVariable String id){
        booksRepo.delete(id);
    }

}
