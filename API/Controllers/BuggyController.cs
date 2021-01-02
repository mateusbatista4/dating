using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext context;
        public BuggyController(DataContext context)
        {
            this.context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret(){
            return "secret sa";
        }

        [Authorize]
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound(){
            var thing = context.Users.Find(-1);
            if(thing == null) return NotFound();
            return Ok(thing);
        }

        [Authorize]
        [HttpGet("server-error")]
        public ActionResult<string> GetSeverError(){
            var thing = context.Users.Find(-1);
            var retiorn = thing.ToString();
            return retiorn;
        }
        [Authorize]
        [HttpGet("bad-reequest")]
        public ActionResult<string> GetBadRequest(){
            return BadRequest("bad request lek");
        }
    }
}