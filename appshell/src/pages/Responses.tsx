import React from 'react';

const Responses: React.FC = () => {

    return (
        <div className='flex flex-col h-dvh p-8 mb-8 items-center bg-stone-800 text-white overflow-y-auto leading-8 text-2xl sm:text-lg'>
            <h1 className='mb-4 font-extrabold text-5xl'>Test Responses</h1>
            <div className='container mt-5'>
                <h2 className="font-bold text-3xl sm:text-xl mb-4">Software Quality Attributes: What are the most important software quality attributes and how can they be ensured in a front-end project?</h2>
                <ul>
                    <li><strong>Usability</strong>: Ensure the interface is intuitive and easy to navigate. This can be achieved through user testing and adhering to design standards.</li>
                    <li><strong>Performance</strong>: Optimize load times and responsiveness. Techniques like lazy loading, minification, and efficient use of resources are key.</li>
                    <li><strong>Maintainability</strong>: Write clean, modular, and well-documented code. Using a consistent code style and leveraging tools like linters can help maintain high code quality.</li>
                    <li><strong>Security</strong>: Protect against vulnerabilities such as XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery). Implement security best practices like input validation and using HTTPS.</li>
                    <li><strong>Scalability</strong>: Ensure the application can handle growth, both in terms of users and features. This can be done by designing a modular architecture and using scalable technologies.</li>
                </ul>
                <p>In a front-end project, these attributes can be ensured through continuous integration and deployment, automated testing, code reviews, and regular performance monitoring.</p>

                <hr className='m-5' />

                <h2 className="font-bold text-3xl sm:text-xl mb-4">Agile Methodologies: Describe how you would apply agile principles in a front-end project. Provide specific examples.</h2>
                <ul>
                    <li><strong>Iterative Development</strong>: Break down the project into small, manageable tasks. For example, develop the homepage as one sprint, then add user authentication in the next. Each sprint results in a working increment of the product.</li>
                    <li><strong>Customer Collaboration</strong>: Involve stakeholders in regular feedback sessions. For instance, after each sprint, demonstrate the latest features to the client and gather feedback for improvements.</li>
                    <li><strong>Responsive to Change</strong>: Be flexible in adjusting priorities. If the client requests a change in the design during development, adapt the project roadmap to incorporate this change, ensuring it aligns with overall goals.</li>
                    <li><strong>Continuous Improvement</strong>: Conduct retrospectives after each sprint to identify what went well and what could be improved. Implement these improvements in the next sprint to refine the process.</li>
                </ul>
                <p>By following these principles, the project remains adaptable, ensuring it meets user needs and client expectations.</p>

                <hr className='m-5' />

                <h2 className="font-bold text-3xl sm:text-xl mb-4">Version Control with GIT: Explain how to resolve merge conflicts in a GIT repository.</h2>
                <p>To resolve merge conflicts in a GIT repository:</p>
                <ol>
                    <li><strong>Identify the Conflict</strong>: When you attempt to merge branches and a conflict occurs, Git will notify you and mark the conflicting files.</li>
                    <li><strong>Open the Files</strong>: Open the conflicted files in your code editor. Git will show the conflicting changes, usually with markers like <code className='bg-black'>&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code className='bg-black'>======</code>, and <code className='bg-black'>&gt;&gt;&gt;&gt;&gt;&gt;</code>.</li>
                    <li><strong>Resolve the Conflict</strong>: Review the conflicting sections and decide how to integrate the changes. You can choose one version, merge parts of both, or create a new solution.</li>
                    <li><strong>Test Your Code</strong>: After resolving the conflicts, test the code to ensure everything works as expected.</li>
                    <li><strong>Mark as Resolved</strong>: Once the conflicts are resolved, use <code className='bg-black'>git add &lt;file&gt;</code> to mark them as resolved.</li>
                    <li><strong>Commit the Changes</strong>: Finally, commit the resolved files with a message explaining the resolution using <code className='bg-black'>git commit</code>.</li>
                </ol>
                <br />
                <p>Example:</p>
                <pre className='bg-black bg-opacity-50 p-4 overflow-auto'>
                    <code>
                        {`git merge feature-branch
# Resolve conflicts
git add resolved-file.js
git commit -m "Resolved merge conflict between main and feature-branch"`
                        }
                    </code>
                </pre>

                <hr className='m-5' />

                <h2 className="font-bold text-3xl sm:text-xl mb-4">4. Code Refactoring: Improve a specific front-end code snippet and explain your refactoring decisions.</h2>
                <p>Here’s a simple refactoring example:</p>
                <br />
                <p><strong>Original Code:</strong></p>
                <br />
                <pre className='bg-black bg-opacity-50 p-4 overflow-auto'>
                    <code>
                        {
                            `function calculateTotal(items) {
let total = 0;
for (let i = 0; i < items.length; i++) {
    total += items[i].price;
    }
    return total;
}`
                        }
                    </code>
                </pre>
                <br />
                <p><strong>Refactored Code:</strong></p>
                <br />
                <pre className='bg-black bg-opacity-50 p-4 overflow-auto'>
                    <code>{
                        `const calculateTotal = (items) => items.reduce((total, item) => total + item.price, 0);`
                    }
                    </code>
                </pre>
                <br />
                <p><strong>Explanation:</strong></p>
                <ul>
                    <li><strong>Using <code className='bg-black'>reduce</code></strong>: The refactored code uses the <code className='bg-black'>reduce</code> method, which is more concise and expressive for summing values in an array.</li>
                    <li><strong>Arrow Function</strong>: The arrow function syntax makes the code more modern and succinct.</li>
                    <li><strong>Immutability</strong>: The refactored code does not mutate variables (<code className='bg-black'>total</code> is not reassigned), which improves code clarity and reduces potential bugs.</li>
                </ul>

                <hr className='m-5' />

                <h2 className="font-bold text-3xl sm:text-xl mb-4">SOLID Principles: Explain each of the SOLID principles and how they apply to front-end development.</h2>
                <ul>
                    <li><strong>Single Responsibility Principle (SRP)</strong>: A class or function should have only one reason to change. In front-end development, this means creating components or functions that handle one specific task, like a <code className='bg-black'>Button</code> component only handling rendering and styling of a button.</li>
                    <li><strong>Open/Closed Principle (OCP)</strong>: Software entities should be open for extension but closed for modification. In React, for instance, you can create a base component and extend its functionality through props without altering the component's internal logic.</li>
                    <li><strong>Liskov Substitution Principle (LSP)</strong>: Subtypes should be substitutable for their base types. In a front-end context, this could mean ensuring that a child component can replace a parent component without affecting the application's correctness.</li>
                    <li><strong>Interface Segregation Principle (ISP)</strong>: Clients should not be forced to depend on interfaces they do not use. In front-end, this can be reflected in designing components that only require the props they need, rather than a bloated interface that forces unnecessary data.</li>
                    <li><strong>Dependency Inversion Principle (DIP)</strong>: High-level modules should not depend on low-level modules. Both should depend on abstractions. In front-end development, this could be achieved by using dependency injection or context providers to manage dependencies between components.</li>
                </ul>

                <hr className='m-5' />

                <h2 className="font-bold text-3xl sm:text-xl mb-4">Application Optimization: Describe optimization strategies in front-end projects.</h2>
                <p>Optimization strategies for front-end projects include:</p>
                <ul>
                    <li><strong>Code Splitting</strong>: Split your code into smaller bundles that can be loaded on demand, improving initial load times. Tools like Webpack facilitate this.</li>
                    <li><strong>Lazy Loading</strong>: Load resources only when needed, such as images or components. This can reduce the amount of data loaded upfront and improve performance.</li>
                    <li><strong>Minification and Compression</strong>: Minify JavaScript, CSS, and HTML files to reduce file sizes. Use tools like Terser for JavaScript and CSSNano for CSS. Additionally, enable Gzip or Brotli compression on the server.</li>
                    <li><strong>Caching</strong>: Implement caching strategies to reduce server load and improve load times. Use service workers for caching assets and enable browser caching with proper cache headers.</li>
                    <li><strong>Optimize Images</strong>: Compress images without losing quality and use modern formats like WebP. Implement responsive images using <code className='bg-black'>srcset</code> and <code className='bg-black'>sizes</code>.</li>
                    <li><strong>Reduce HTTP Requests</strong>: Minimize the number of HTTP requests by combining files, using sprites, and inlining small assets. This reduces latency and speeds up page load times.</li>
                    <li><strong>Use a Content Delivery Network (CDN)</strong>: Serve static assets from a CDN to reduce load times by using geographically distributed servers.</li>
                </ul>
                <p>By applying these strategies, you can significantly enhance the performance and user experience of your front-end application.</p>
            </div>
        </div>
    );
};

export default Responses;