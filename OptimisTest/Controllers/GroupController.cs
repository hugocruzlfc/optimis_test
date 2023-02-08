using System;
using Microsoft.AspNetCore.Mvc;
using OptimisTest.Models;

namespace OptimisTest.Controllers
{

	[ApiController]
	[Route("[controller]")]
	public class GroupController:ControllerBase
	{
		private static readonly IEnumerable<GroupModel> Groups = new[]
	  {
			new GroupModel{Id =1, Name = "Group_1",LabCountry ="FR", StainId= new int[2] {1, 2 }, active= true},
			new GroupModel{Id =2, Name = "Group_2", LabCountry ="SWE", StainId= new int[2] {3, 4}, active= true},

		};

		[HttpGet()]
		public GroupModel[] Get()
		{
			GroupModel[] groups = Groups.ToArray();
			return groups;
		}
	}
}

