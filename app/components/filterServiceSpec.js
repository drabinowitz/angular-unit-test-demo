xdescribe('FilterModule', function() {

	beforeEach(module('FilterModule'));

	describe('even filter', function(){

		it('should only return even numbers', inject(function($filter) {

			var evenFilter = $filter('even');

			expect(evenFilter( [1,2,3,4] )).toEqual( [2,4] );

		}));

	});

});

xdescribe('FilterModule', function() {

	beforeEach(module('FilterModule'));

	describe('even filter', function(){

		it('should only return even numbers', inject(function(evenFilter) {

			expect(evenFilter( [1,2,3,4] )).toEqual( [2,4] );

		}));

	});

});

describe('FilterModule', function() {

	beforeEach(module('FilterModule'));

	describe('even filter', function(){

		it('should only return even numbers', function(){

			module(function($provide){

				$provide.value('evenFilter', function(values){

					return values;

				});

			});

			inject(function(evenFilter) {

				expect(evenFilter( [1,2,3,4] )).toEqual( [1,2,3,4] );

			});

		});

	});

});