import { Component } from '@angular/core'; 

@Component({
  selector: 'app-amit-rakte',
  templateUrl: './amit-rakte.component.html',
  styleUrls: ['./amit-rakte.component.css']
})
export class AmitRakteComponent {
mailUs()
{
  alert("Thanks for choosing us !\n\nDeveloper's Mail: official.amitrakte@gmail.com")
}
phoneUs()
{
  alert("Thanks for choosing us !\n\nDeveloper's Mobile: +91 7770081004")
}
webUs()
{
  window.location.href="https://github.com/Ameet-Rakte/Complaint-Redressal-System";
}
}
