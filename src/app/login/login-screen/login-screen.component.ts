import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
    //     this.accountService.login(this.f.username.value, this.f.password.value)
    //         .pipe(first())
    //         .subscribe({
    //             next: () => {
    //                 // get return url from query parameters or default to home page
    //                 const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //                 this.router.navigateByUrl(returnUrl);
    //             },
    //             error: error => {
    //             }
    //         });
    // }
    }
}

