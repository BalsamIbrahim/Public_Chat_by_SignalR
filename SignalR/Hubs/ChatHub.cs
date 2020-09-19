using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR.Hubs
{
    public class ChatHub :Hub
    {
        public async Task SendMessage(string fromuser , string message)
        {
            await Clients.All.SendAsync("ReciveMessage", fromuser, message);
        }
    }
}
