namespace Pony29.CS
{
    using Markdig;
    using OpenAI;
    public class Chat
    {


    }
    enum Role
    {
        user,
        ai,
        system
    }



    public class MarkdownService
    {
        public string ConvertToHtml(string markdown)
        {
            var pipeline = new MarkdownPipelineBuilder().UseAdvancedExtensions().Build();
            return Markdown.ToHtml(markdown, pipeline);
        }
    }
}
