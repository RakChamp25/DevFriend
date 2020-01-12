'use strict';

define("fev-friend/tests/integration/components/website-row-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | website-row', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <WebsiteRow />
      */
      {
        id: "CwC3qe9X",
        block: "{\"symbols\":[],\"statements\":[[5,\"website-row\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <WebsiteRow>
              template block text
            </WebsiteRow>
          
      */
      {
        id: "q5sSnK09",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"website-row\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("fev-friend/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('background.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'background.js should pass ESLint\n\n2:1 - \'chrome\' is not defined. (no-undef)\n3:3 - \'chrome\' is not defined. (no-undef)\n6:7 - \'chrome\' is not defined. (no-undef)');
  });
  QUnit.test('controllers/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/home.js should pass ESLint\n\n19:5 - \'chrome\' is not defined. (no-undef)\n20:7 - Unexpected console statement. (no-console)');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });
});
define("fev-friend/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('fev-friend/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'fev-friend/templates/application.hbs should pass TemplateLint.\n\nfev-friend/templates/application.hbs\n  2:7  error  elements cannot have inline styles  no-inline-styles\n  3:64  error  elements cannot have inline styles  no-inline-styles\n  4:10  error  elements cannot have inline styles  no-inline-styles\n');
  });
  QUnit.test('fev-friend/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'fev-friend/templates/home.hbs should pass TemplateLint.\n\nfev-friend/templates/home.hbs\n  14:26  error  Interaction added to non-interactive element  no-invalid-interactive\n');
  });
});
define("fev-friend/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/website-row-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/website-row-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });
});
define("fev-friend/tests/test-helper", ["fev-friend/app", "fev-friend/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("fev-friend/tests/unit/controllers/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:home');
      assert.ok(controller);
    });
  });
});
define("fev-friend/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define('fev-friend/config/environment', [], function() {
  var prefix = 'fev-friend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('fev-friend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
