package com.demo;


import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class TestActiviey extends AppCompatActivity {

    private TextView back;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test_activiey);

        back = findViewById(R.id.back);
        back.setOnClickListener(v -> {

        });
    }
}
