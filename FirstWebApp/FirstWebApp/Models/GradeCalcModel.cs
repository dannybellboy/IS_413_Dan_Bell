using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using System.ComponentModel.DataAnnotations;

namespace FirstWebApp.Models
{
    public class GradeCalcModel
    {
        [Range(0,100, ErrorMessage = "Enter a number between 0 and 100")]
        public int Ass { get; set; }
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public int Proj { get; set; }
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public int Quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public int Exam { get; set; }
        [Range(0, 100, ErrorMessage = "Enter a number between 0 and 100")]
        public int Intex { get; set; }
    }
}
