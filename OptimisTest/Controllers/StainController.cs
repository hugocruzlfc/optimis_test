using System;
using Microsoft.AspNetCore.Mvc;
using OptimisTest;
using OptimisTest.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace OptimisTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StainController:ControllerBase
    {
        private static readonly IEnumerable<StainModel> Stains = new[]
        {
            new StainModel{Id =1, Name = "Stain_1", RelaseDate= new DateTime(2023, 6,2).Date},
            new StainModel{Id =2, Name = "Stain_2", RelaseDate= new DateTime(2023, 6,2).Date},
            new StainModel{Id =3, Name = "Stain_3", RelaseDate= new DateTime(2023, 4,2).Date},
            new StainModel{Id =4, Name = "Stain_4", RelaseDate= new DateTime(2023, 4,2).Date},
            new StainModel{Id =5, Name = "Stain_5", RelaseDate= new DateTime(2023, 3,2).Date},
            new StainModel{Id =6, Name = "Stain_6", RelaseDate= new DateTime(2023, 3,2).Date},
            new StainModel{Id =7, Name = "Stain_7", RelaseDate= new DateTime(2023, 4,2).Date},
            new StainModel{Id =8, Name = "Stain_8", RelaseDate= new DateTime(2023, 3,2).Date},
            new StainModel{Id =9, Name = "Stain_9", RelaseDate= new DateTime(2023, 6,2).Date},
            new StainModel{Id =10, Name = "Stain_10", RelaseDate= new DateTime(2023, 3,2).Date},


        };

        [HttpGet]
        public StainModel[] Get()
        {
            StainModel[] stains = Stains.ToArray();
            return stains;
        }
    }
}
