package com.monishwar.backend.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.monishwar.backend.model.book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class booksRepo {

    @Autowired
    private DynamoDBMapper mapper;

    public void add(final book book){
        if(book.getId() != null)
            mapper.save(book);
        else
            System.out.println("Please provide id");
    }

    public book get(final String id){
        return mapper.load(book.class, id);
    }

    public void delete(final String id){
        book book = new book();
        book.setId(id);
        mapper.delete(book);
    }

    public List<book> getAll(){
        return  mapper.scan(book.class, new DynamoDBScanExpression());
    }

}
